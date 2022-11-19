import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.component'
import { EditTitle } from '@app/common/components/edit-title/edit-title.component'
import {
	Edit,
	NumberInput,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
} from 'react-admin'

export const MenuEdit = () => (
	<Edit title={<EditTitle source="title" />} mutationMode="pessimistic">
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
	</Edit>
)
