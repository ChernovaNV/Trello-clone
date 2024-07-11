import { useState } from 'react'
import { DetailTask, TasksList } from 'widgets/index'

import { Wrapper } from './BoardPage.styles'

const BoardPage = () => {
	const [lists, setLists] = useState([
		{
			id: '1',
			title: 'TODO',
			cards: [
				{ id: '0', text: 'text card' },
				{ id: '1', text: 'text card2' },
			],
		},
		{ id: '2', title: 'In Progress', cards: [{ id: '0', text: 'text card' }] },
		{ id: '3', title: 'Testing', cards: [{ id: '0', text: 'text card' }] },
		{ id: '4', title: 'Done', cards: [{ id: '0', text: 'text card' }] },
	])

	return (
		<Wrapper>
			{lists.map(list => (
				<TasksList title={list.title} key={list.id} cards={list.cards} />
			))}

			<DetailTask />
		</Wrapper>
	)
}

export default BoardPage
