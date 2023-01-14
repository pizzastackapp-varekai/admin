import PersonIcon from '@mui/icons-material/Person'
import { CustomerList } from './components/customer-list/customer-list.component'
import { CustomerShow } from './components/customer-show/customer-show.component'

export const CustomerResource = {
	name: 'customers',
	list: CustomerList,
	show: CustomerShow,
	options: {
		label: 'Користувачі',
	},
	icon: PersonIcon,
}
