import { useCloudinarySignatureQuery } from '@app/core/types'
import { FC } from 'react'
import { InputProps, useInput, useNotify } from 'react-admin'
import { CloudinaryInputUI } from '../cloudinary-input-ui/cloudinary-input-ui.component'
import axios, { AxiosError } from 'axios'
import { CloudinaryUploadDTO } from './cloudinary-upload.dto'

export const CloudinaryInput: FC<InputProps> = props => {
	const { label, source } = props
	const computedLabel = String(label) ?? source
	const { data: cloudSignature, loading } = useCloudinarySignatureQuery({
		fetchPolicy: 'network-only',
	})
	const notify = useNotify()
	const {
		field: { onChange, value },
	} = useInput(props)
	const onImageSelected = async (image: File) => {
		if (!cloudSignature?.cloudinarySignature) {
			return
		}
		const { cloudName, apiKey, publicId, signature, timestamp } =
			cloudSignature.cloudinarySignature
		const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`
		const formData = new FormData()
		formData.append('api_key', apiKey)
		formData.append('public_id', publicId)
		formData.append('signature', signature)
		formData.append('timestamp', String(timestamp))
		formData.append('folder', 'menu')
		formData.append('file', image)
		let data: CloudinaryUploadDTO
		try {
			const response = await axios.post<CloudinaryUploadDTO>(url, formData)
			data = response.data
		} catch (error) {
			notify((error as AxiosError).message)
		}
		onChange(data!.public_id)
	}

	const {
		field: { value: categoryId },
	} = useInput({ source: 'category_id' })
	const isDrinkCategory = categoryId === 'b7308596-bc63-4e23-abf1-7d0853c93fe9'
	return (
		<CloudinaryInputUI
			label={computedLabel}
			value={value}
			disabled={loading}
			onImageSelected={onImageSelected}
			fitImage={isDrinkCategory}
		/>
	)
}
