import { cloudinary } from '@app/core/cloudinary'
import { AdvancedImage } from '@cloudinary/react'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Skeleton,
	Typography,
} from '@mui/material'
import { ChangeEventHandler, FC, useRef } from 'react'

interface CloudinaryInputUIProps {
	label: string
	disabled: boolean
	value?: string
	onImageSelected: (image: File) => void
}

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({
	label,
	disabled,
	value,
	onImageSelected,
}) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const onFileInputChange: ChangeEventHandler<HTMLInputElement> = e => {
		if (!e.target.files) {
			return
		}
		const [file] = Array.from(e.target.files)
		onImageSelected(file)
	}
	const onUploadClick = () => {
		inputRef.current?.click()
	}

	const image = cloudinary.image(value)
	image.addTransformation('w_384,h_240,dpr_2.0')
	return (
		<div style={{ marginBottom: 20 }}>
			<input
				type="file"
				accept="image/*"
				style={{ display: 'none' }}
				ref={inputRef}
				onChange={onFileInputChange}
			/>
			<Card variant="outlined">
				<CardHeader title={label} />
				<CardContent>
					{value ? (
						<AdvancedImage cldImg={image} width={384} height={240} />
					) : (
						<Skeleton variant="rectangular" width={384} height={240} />
					)}
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						onClick={onUploadClick}
						disabled={disabled}
					>
						<Typography>Завантажити</Typography>
					</Button>
				</CardActions>
			</Card>
		</div>
	)
}
