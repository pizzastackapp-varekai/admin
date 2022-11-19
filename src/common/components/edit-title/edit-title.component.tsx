import { FC } from 'react'
import { useRecordContext } from 'react-admin'

interface EditTitleProps {
	source: string
}

export const EditTitle: FC<EditTitleProps> = ({ source }) => {
	const record = useRecordContext()
	if (!record) {
		return null
	}
	return <div>{record[source]}</div>
}
