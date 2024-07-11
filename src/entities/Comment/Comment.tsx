import Textarea from 'react-textarea-autosize'

import { UserIcon } from '../../shared/ui'

import { Author, Inner, Wrapper } from './Comment.styles'

export const Comment = () => {
	return (
		<Wrapper>
			<UserIcon width={55} height={55} fill='#b6c2cf' />
			<Inner>
				<Author>Автор коммента</Author>
				<Textarea
					className='textarea textarea--gray'
					placeholder='Напишите комментарий...'
				/>
			</Inner>
		</Wrapper>
	)
}

export default Comment
