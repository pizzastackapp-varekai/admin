import { FC } from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { FinanceChartTooltip } from '../finance-chart-tooltip/finance-chart-tooltip.component'

interface FinanceChartProps {
	data: any[]
}

export const FinanceChart: FC<FinanceChartProps> = ({ data }) => {
	return (
		<BarChart width={800} height={250} data={data}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip content={<FinanceChartTooltip />} />
			<Bar dataKey="sum" fill="#fbbf24" />
		</BarChart>
	)
}
