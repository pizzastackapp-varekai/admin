import { CssBaseline } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import { Admin, DataProvider, Loading, Resource } from 'react-admin'
import buildHasuraProvider from 'ra-data-hasura'
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component'
import { MenuEdit } from '@app/modules/menu/components/menu-edit/menu-edit.component'
import { MenuCreate } from '@app/modules/menu/components/menu-create/menu-create.component'
import { authProvider } from '@app/core/auth-provider'
import { apolloClient } from '@app/core/apollo-client'

export const App = () => {
	const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
		null
	)

	useEffect(() => {
		const buildDataProvider = async () => {
			const db = await buildHasuraProvider({
				client: apolloClient,
			})
			setDataProvider(db)
		}
		buildDataProvider()
	}, [])

	if (!dataProvider) {
		return <Loading />
	}
	return (
		<Fragment>
			<CssBaseline />
			<Admin
				dataProvider={dataProvider}
				authProvider={authProvider}
				requireAuth
			>
				<Resource
					name="menu"
					list={MenuList}
					edit={MenuEdit}
					create={MenuCreate}
				/>
			</Admin>
		</Fragment>
	)
}
