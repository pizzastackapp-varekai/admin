import { Menu } from '@app/core/types'
import {
	Datagrid,
	EditButton,
	FunctionField,
	List,
	ReferenceField,
	ReferenceInput,
	TextField,
	SelectInput,
	TextInput,
} from 'react-admin'
import { MenuListExpand } from '../menu-list-expand/menu-list-expand.component'

const filters = [
	<TextInput source="title" label="Пошук по назві" />,
	<ReferenceInput source="category_id" reference="categories" label="Категорії">
		<SelectInput optionText="title" label="Категорії" />
	</ReferenceInput>,
]

export const MenuList = () => (
	<List filters={filters} exporter={false}>
		<Datagrid
			expand={MenuListExpand}
			rowClick="expand"
			bulkActionButtons={false}
			isRowExpandable={(record: Menu) =>
				!!record.ingredients || !!record.weight
			}
		>
			<TextField source="title" label="Навзва" />
			<ReferenceField
				source="category_id"
				reference="categories"
				label="Категорія"
				link={false}
			>
				<TextField source="title" />
			</ReferenceField>
			<FunctionField
				label="Ціна"
				render={(record: Menu) => `${record.price} грн`}
			/>
			<EditButton />
		</Datagrid>
	</List>
)
