import { useGetLastWeekOrdersStatisticQuery } from '@app/core/types'
import { Card, CardContent, Typography } from '@mui/material'
import { Loading, useGetList } from 'react-admin'

import { FinanceChart } from '../finance-chart/finance-chart.component'

// const data = [
// 	{
// 		date: '24/12',
// 		total: 4000,
// 	},
// 	{
// 		date: '23/12',
// 		total: 3000,
// 	},
// 	{
// 		date: '22/12',
// 		total: 2000,
// 	},
// 	{
// 		date: '21/12',
// 		total: 2780,
// 	},
// 	{
// 		date: '20/12',
// 		total: 1890,
// 	},
// 	{
// 		date: '19/12',
// 		total: 2390,
// 	},
// 	{
// 		date: '18/12',
// 		total: 3490,
// 	},
// ].reverse()

export const Dashboard = () => {
	const { data, loading } = useGetLastWeekOrdersStatisticQuery()
	if (loading) return <Loading />
	return (
		<Card title="Welcome to dashboard" sx={{ marginTop: '64px' }}>
			<CardContent>
				<Typography variant="h5">Вітаємо в адмінці 🍕 PizzaStack </Typography>
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h6">Продажі за останній тиждень </Typography>
						<FinanceChart data={data?.last_week_orders ?? []} />
					</CardContent>
				</Card>
			</CardContent>
		</Card>
	)
}
