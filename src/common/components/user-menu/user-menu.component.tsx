import SettingsIcon from '@mui/icons-material/Settings'
import { FC } from 'react'
import {
	UserMenuProps,
	UserMenu as UserMenuOriginal,
	Logout,
	MenuItemLink,
} from 'react-admin'

export const UserMenu: FC<UserMenuProps> = props => {
	return (
		<UserMenuOriginal {...props}>
			<MenuItemLink
				to="/settings"
				primaryText="Налаштування"
				leftIcon={<SettingsIcon />}
			/>
			<Logout />
		</UserMenuOriginal>
	)
}
