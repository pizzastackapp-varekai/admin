import { Orders, Order_Status_Enum } from '@app/core/types'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { FC, MouseEvent } from 'react'
import {
	useGetList,
	useListContext,
	useNotify,
	useRecordContext,
	useUpdate,
} from 'react-admin'

interface InlineStatusEditProps {
	label?: string
}

export const InlineStatusEdit: FC<InlineStatusEditProps> = ({ label }) => {
	const record = useRecordContext<Orders>()
	const orderStatus = useGetList('order_status')
	const notify = useNotify()

	const stopPropagation = (event: MouseEvent) => {
		event.stopPropagation()
	}

	const { resource } = useListContext()

	const [changeStatus] = useUpdate()

	const handleChange = async (event: SelectChangeEvent<Order_Status_Enum>) => {
		try {
			await changeStatus(
				resource,
				{
					id: record.id,
					data: { status: event.target.value },
					previousData: record,
				},
				{
					mutationMode: 'pessimistic',
				}
			)
			notify('Статус замволення змінено!', { type: 'success' })
		} catch (error) {
			console.log(error)
			notify('Щось пішло не так 😥', { type: 'error' })
		}
	}

	return (
		<div onClick={e => e.stopPropagation()}>
			<Select
				value={record.status}
				label={label}
				onChange={handleChange}
				variant="standard"
				fullWidth
			>
				{orderStatus.data?.map(orderStatus => (
					<MenuItem value={orderStatus.id} onClick={stopPropagation}>
						{orderStatus.label}
					</MenuItem>
				))}
			</Select>
		</div>
	)
}
