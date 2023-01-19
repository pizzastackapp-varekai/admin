import { Orders, Order_Status_Enum } from '@app/core/types'
import {
	Datagrid,
	DateField,
	List,
	FunctionField,
	EditButton,
} from 'react-admin'
import { InlineStatusEdit } from '../inline-status-edit/inline-status-edit.component'

export const NewOrders = () => {
	return (
		<List
			resource="orders"
			hasCreate={false}
			exporter={false}
			filter={{
				'status@_in': [
					Order_Status_Enum.New,
					Order_Status_Enum.InProgress,
					Order_Status_Enum.Done,
				],
			}}
		>
			<Datagrid bulkActionButtons={false} rowClick="show">
				<InlineStatusEdit label="Статус замовлення" />

				<DateField
					source="created_at"
					label="Створено"
					showTime
					options={{ timeZone: 'Europe/Kiev' }}
				/>
				<FunctionField
					label="Сума"
					source="sum"
					render={(record: Orders) => `${record.sum} грн.`}
				/>
				<EditButton />
			</Datagrid>
		</List>
	)
}
