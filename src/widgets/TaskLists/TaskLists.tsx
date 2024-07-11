// eslint-disable-next-line import/no-extraneous-dependencies
import Textarea from 'react-textarea-autosize'
import { Task } from 'shared/ui'

import { Button, Content, Footer, StyledList } from './TaskLists.styles'

interface props {
	title: string
	cards: {
		id: string
		text: string
	}[]
}

const TasksList = ({ title, cards }: props) => {
	return (
		<StyledList>
			<Textarea value={title} maxLength={100} className='textarea' />

			<Content>
				{cards.map(card => (
					<Task key={card.id} text={card.text} />
				))}
			</Content>
			<Footer>
				<Button> + Добавить карточку</Button>
			</Footer>
		</StyledList>
	)
}

export default TasksList
