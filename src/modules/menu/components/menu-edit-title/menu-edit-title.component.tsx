import { Menu } from '@app/core/types'
import { useRecordContext } from 'react-admin'

export const MenuEditItem = () => {
	const menuItem = useRecordContext<Menu>()
	if (!menuItem) {
		return null
	}
	return <div>{menuItem.title}</div>
}
