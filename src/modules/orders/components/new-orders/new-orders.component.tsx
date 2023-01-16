import { Orders, Order_Status_Enum } from '@app/core/types'
import {
	Datagrid,
	DateField,
	List,
	FunctionField,
	ChipField,
	ReferenceField,
	EditButton,
} from 'react-admin'

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
				<ReferenceField
					reference="order_status"
					source="status"
					label="Статус замовлення"
					link={false}
				>
					<ChipField source="label" />
				</ReferenceField>
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
