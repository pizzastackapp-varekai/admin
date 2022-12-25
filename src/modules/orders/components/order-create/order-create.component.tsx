import { ManyToManyInput } from '@app/common/components/many-to-many-input/many-to-many-input.component'
import { useManyToManyInput } from '@app/common/hooks/useManyToManyInput'
import { Order_Status_Enum } from '@app/core/types'
import { OrderForm } from '@app/modules/orders/order.types'
import { useRef } from 'react'
import {
	Create,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
	useRedirect,
} from 'react-admin'

export const OrderCreate = () => {
	const { mutateJoinResource, fieldsProps } = useManyToManyInput({
		joinResource: 'orders_menu',
		resourceField: 'order_id',
		referenceField: 'menu_id',
	})

	const newReferences = useRef<string[]>([])
	const transform = (data: OrderForm) => {
		newReferences.current = data.joined_orders_menu
		return data
	}

	const redirect = useRedirect()
	const onSuccess = async (data: Omit<OrderForm, 'joined_orders_menu'>) => {
		await mutateJoinResource({
			id: data.id,
			newReferences: newReferences.current,
		})
		redirect('show', 'orders', data.id)
	}

	return (
		<Create
			title="Нове замовлення"
			transform={transform}
			mutationOptions={{ onSuccess }}
		>
			<SimpleForm>
				<TextInput source="client_address" label="Адреса" fullWidth />
				<TextInput source="client_name" label="Ім'я" />
				<TextInput source="client_phone" label="Телефон" />
				<ReferenceInput source="status" reference="order_status">
					<SelectInput
						optionText="label"
						label="Статус замовлення"
						defaultValue={Order_Status_Enum.New}
						disabled
					/>
				</ReferenceInput>
				<ManyToManyInput
					label="Меню"
					reference="menu"
					source="joined_orders_menu"
					{...fieldsProps}
				/>
			</SimpleForm>
		</Create>
	)
}
