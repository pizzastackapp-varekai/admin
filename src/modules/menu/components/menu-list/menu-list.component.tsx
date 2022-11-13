import { Menu } from '@app/core/types'
import {
	Datagrid,
	EditButton,
	FunctionField,
	List,
	TextField,
	TextInput,
} from 'react-admin'
import { MenuListExpand } from '../menu-list-expand/menu-list-expand.component'

const filters = [<TextInput source="title" label="Пошук по назві" />]

export const MenuList = () => (
	<List filters={filters} exporter={false}>
		<Datagrid
			expand={MenuListExpand}
			rowClick="expand"
			bulkActionButtons={false}
		>
			<TextField source="title" label="Навзва" />
			<FunctionField
				label="Ціна"
				render={(record: Menu) => `${record.price} грн`}
			/>
			<EditButton />
		</Datagrid>
	</List>
)
