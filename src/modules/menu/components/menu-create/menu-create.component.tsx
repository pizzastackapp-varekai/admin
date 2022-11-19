import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.component'
import {
	Create,
	NumberInput,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
} from 'react-admin'

export const MenuCreate = () => (
	<Create title="Додати елемент меню">
		<SimpleForm>
			<TextInput source="title" fullWidth label="Назва" />
			<ReferenceInput source="category_id" reference="categories">
				<SelectInput optionText="title" label="Категорії" />
			</ReferenceInput>
			<CloudinaryInput source="image" label="Фото" />
			<TextInput source="ingredients" fullWidth label="Інгрідієнти" />
			<NumberInput source="price" label="Ціна в грн." />
			<NumberInput source="weight" label="Вага в гр." />
		</SimpleForm>
	</Create>
)
