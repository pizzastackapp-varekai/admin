import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.component'
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin'
import { MenuEditItem } from '../menu-edit-title/menu-edit-title.component'

export const MenuEdit = () => (
	<Edit title={<MenuEditItem />} mutationMode="pessimistic">
		<SimpleForm>
			<TextInput source="title" fullWidth label="Назва" />
			<CloudinaryInput source="image" label="Фото" />
			<TextInput source="ingredients" fullWidth label="Інгрідієнти" />
			<NumberInput source="price" label="Ціна в грн." />
			<NumberInput source="weight" label="Вага в гр." />
		</SimpleForm>
	</Edit>
)
