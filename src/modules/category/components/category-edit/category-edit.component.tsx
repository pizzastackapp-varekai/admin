import { EditTitle } from '@app/common/components/edit-title/edit-title.component';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const CategoryEdit = () => (
  <Edit title={<EditTitle source="title" />} mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="title" label="Назва" />
      <TextInput source="slug" label="Слаг" />
    </SimpleForm>
  </Edit>
);
