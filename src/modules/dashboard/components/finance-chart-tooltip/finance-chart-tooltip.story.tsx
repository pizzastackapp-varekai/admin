import { theme } from '@app/core/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'react-admin'

import { FinanceChartTooltip } from './finance-chart-tooltip.component'

export default {
	title: 'Dashboard/Finance Chart Tooltip',
	component: FinanceChartTooltip,
} as ComponentMeta<typeof FinanceChartTooltip>

const Template: ComponentStory<typeof FinanceChartTooltip> = args => (
	<ThemeProvider theme={theme}>
		<FinanceChartTooltip {...args} />
	</ThemeProvider>
)

export const View = Template.bind({})
View.args = {
	active: true,
	payload: [
		{
			payload: {
				count: 3,
				date: '2022-12-24',
				sum: 18365,
			},
		},
	],
}
