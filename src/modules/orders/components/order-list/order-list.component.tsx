import { Orders } from '@app/core/types';
import {
  ChipField,
  Datagrid,
  FunctionField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
} from 'react-admin';

const filters = [
  <ReferenceInput
    source="status"
    reference="order_status"
    label="Статус замовлення"
  >
    <SelectInput optionText="label" label="Статус" />
  </ReferenceInput>,
];

export const OrderList = () => (
  <List exporter={false} filters={filters}>
    <Datagrid rowClick="show" bulkActionButtons={false}>
      <TextField source="client_address" label="Адреса" />
      <TextField source="client_name" label="Ім'я" />
      <TextField source="client_phone" label="Телефон" />
      <ReferenceField
        reference="order_status"
        source="status"
        label="Статус замовлення"
        link={false}
      >
        <ChipField source="label" />
      </ReferenceField>
      <FunctionField
        label="Сума"
        source="sum"
        render={(record: Orders) => `${record.sum} грн.`}
      />
    </Datagrid>
  </List>
);
