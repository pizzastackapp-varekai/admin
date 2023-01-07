import PersonIcon from '@mui/icons-material/Person'
import { CustomerList } from './components/customer-list.component'

export const CustomerResource = {
	name: 'customers',
	list: CustomerList,
	options: {
		label: 'Користувачі',
	},
	icon: PersonIcon,
}
