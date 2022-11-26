import {
	Edit,
	ReferenceInput,
	SimpleForm,
	SelectInput,
	Loading,
} from 'react-admin'
import { SettingEditToolbar } from '../setting-edit-toolbar/setting-edit-toolbar.component'

import { useGetSettingsQuery } from '@app/core/types'

export const SettingEdit = () => {
	const { data, loading } = useGetSettingsQuery()

	if (!data || loading) {
		return <Loading />
	}

	return (
		<Edit
			mutationMode="pessimistic"
			title="Налаштування"
			id={data.settings[0].id}
			resource="settings"
		>
			<SimpleForm toolbar={<SettingEditToolbar />}>
				<ReferenceInput source="drinks_category" reference="categories">
					<SelectInput optionText="title" label="Категорії напоїв" fullWidth />
				</ReferenceInput>
			</SimpleForm>
		</Edit>
	)
}
