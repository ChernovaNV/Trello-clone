// eslint-disable-next-line import/no-extraneous-dependencies
import Textarea from 'react-textarea-autosize'
import { Comment } from 'entities/index'
import { Modal } from 'shared/ui'

import { Author, CommentsList, Text, Title } from './DetailTask.styles'

export const DetailTask = () => {
	return (
		<Modal>
			<>
				<div>
					<Title>Имя карточки</Title>
					<Text>
						в колонке <span>Имя списка</span>
					</Text>
					<Author>Автор: </Author>
				</div>
				<div>
					<p>Описание</p>
					<Textarea
						className='textarea textarea--gray'
						placeholder='Добавить более детальное описание...'
					/>
				</div>
				<div>
					<p>Комментарии</p>
					<CommentsList>
						<Comment />
					</CommentsList>
				</div>
			</>
		</Modal>
	)
}

export default DetailTask
