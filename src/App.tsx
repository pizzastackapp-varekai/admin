import {
	Admin,
	CustomRoutes,
	DataProvider,
	Loading,
	Resource,
} from 'react-admin'
import { CssBaseline } from '@mui/material'
import { useEffect, useState } from 'react'
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component'
import { MenuEdit } from '@app/modules/menu/components/menu-edit/menu-edit.component'
import { MenuCreate } from '@app/modules/menu/components/menu-create/menu-create.component'
import { authProvider } from '@app/core/auth-provider'
import { theme } from '@app/core/theme'
import { i18nProvider } from '@app/core/i18n'
import { CategoryList } from '@app/modules/category/components/category-list/category-list.component'
import { CategoryEdit } from '@app/modules/category/components/category-edit/category-edit.component'
import { CategoryCreate } from '@app/modules/category/components/category-create/category-create.component'
import { SettingEdit } from '@app/modules/settings/components/setting-edit/setting-edit.component'
import { Route } from 'react-router-dom'
import { Layout } from '@app/common/components/layout/layout.component'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import CategoryIcon from '@mui/icons-material/Category'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { OrderList } from '@app/modules/orders/components/order-list/order-list.component'
import { OrderShow } from '@app/modules/orders/components/order-show/order-show.component'
import { OrderEdit } from '@app/modules/orders/components/order-edit/order-edit.component'
import { useGetSettingsQuery } from '@app/core/types'
import { buildDataProvider } from '@app/core/data-provider'

export const App = () => {
	const { data: settings } = useGetSettingsQuery()

	const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
		null
	)
	useEffect(() => {
		const getDataProvider = async () => {
			const dp = await buildDataProvider()

			setDataProvider(dp)
		}

		getDataProvider()
	}, [])

	if (!dataProvider || !settings) {
		return <Loading />
	}

	return (
		<>
			<CssBaseline />
			<Admin
				dataProvider={dataProvider}
				authProvider={authProvider}
				i18nProvider={i18nProvider}
				requireAuth
				theme={theme}
				layout={Layout}
			>
				<Resource
					name="menu"
					list={MenuList}
					edit={MenuEdit}
					create={MenuCreate}
					options={{ label: 'Меню' }}
					icon={RestaurantMenuIcon}
				/>
				<Resource
					name="categories"
					list={CategoryList}
					edit={CategoryEdit}
					create={CategoryCreate}
					options={{ label: 'Категорії' }}
					icon={CategoryIcon}
				/>
				<Resource
					name="orders"
					list={OrderList}
					show={OrderShow}
					edit={OrderEdit}
					options={{ label: 'Замовлення' }}
					icon={ShoppingBagIcon}
				/>
				<Resource name="settings" />
				<Resource name="order_status" />
				<Resource name="orders_menu" />
				<CustomRoutes>
					<Route path="/settings" element={<SettingEdit />} />
				</CustomRoutes>
			</Admin>
		</>
	)
}

export default App
