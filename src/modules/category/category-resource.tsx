import { CategoryList } from '@app/modules/category/components/category-list/category-list.component'
import { CategoryEdit } from '@app/modules/category/components/category-edit/category-edit.component'
import { CategoryCreate } from '@app/modules/category/components/category-create/category-create.component'
import CategoryIcon from '@mui/icons-material/Category'

export const CategoryResource = {
	name: 'categories',
	list: CategoryList,
	edit: CategoryEdit,
	create: CategoryCreate,
	options: {
		label: 'Категорії',
	},
	icon: CategoryIcon,
}
