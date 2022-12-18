import { ManyToManyInput } from '@app/common/components/many-to-many-input/many-to-many-input.component';
import { useManyToManyInput } from '@app/common/hooks/useManyToManyInput';
import { OrderForm } from '@app/modules/orders/order.types';
import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const OrderEdit = () => {
  const { mutateJoinResource, fieldsProps } = useManyToManyInput({
    joinResource: 'orders_menu',
    resourceField: 'order_id',
    referenceField: 'menu_id',
  });

  const transform = async (data: OrderForm) => {
    await mutateJoinResource({
      id: data.id,
      newReferences: data.joined_orders_menu,
    });

    return data;
  };

  return (
    <Edit mutationMode="pessimistic" transform={transform}>
      <SimpleForm>
        <TextInput source="client_address" label="Адреса" fullWidth />
        <TextInput source="client_name" label="Ім'я" />
        <TextInput source="client_phone" label="Телефон" />
        <ReferenceInput source="status" reference="order_status">
          <SelectInput optionText="label" label="Статус замовлення" />
        </ReferenceInput>
        <ManyToManyInput
          label="Меню"
          reference="menu"
          source="joined_orders_menu"
          {...fieldsProps}
        />
      </SimpleForm>
    </Edit>
  );
};
