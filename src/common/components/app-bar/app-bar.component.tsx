import { FC } from 'react'
import { AppBar as AppBarOriginal, AppBarProps } from 'react-admin'
import { UserMenu } from '../user-menu/user-menu.component'

export const AppBar: FC<AppBarProps> = props => {
	return <AppBarOriginal {...props} userMenu={<UserMenu />} />
}
