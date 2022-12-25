import { theme } from '@app/core/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'react-admin'
import { FinanceChart } from './finance-chart.component'

export default {
	title: 'Dashboard/Finance Chart',
	component: FinanceChart,
} as ComponentMeta<typeof FinanceChart>

const Template: ComponentStory<typeof FinanceChart> = args => (
	<ThemeProvider theme={theme}>
		<FinanceChart {...args} />
	</ThemeProvider>
)

export const View = Template.bind({})
View.args = {
	data: [
		{
			count: 1,
			date: '2022-12-18',
			sum: 265,
		},
		{
			count: 2,
			date: '2022-12-20',
			sum: 695,
		},
		{
			count: 1,
			date: '2022-12-23',
			sum: 345,
		},
		{
			count: 49,
			date: '2022-12-24',
			sum: 18365,
		},
	],
}
