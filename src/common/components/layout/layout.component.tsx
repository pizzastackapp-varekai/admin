import { FC } from 'react'
import { Layout as LayoutOriginal, LayoutProps } from 'react-admin'
import { AppBar } from '../app-bar/app-bar.component'

export const Layout: FC<LayoutProps> = props => {
	return <LayoutOriginal {...props} appBar={AppBar} />
}
