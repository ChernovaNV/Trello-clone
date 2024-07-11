import { TaskWrapper } from './Task.styles'

interface props {
	text: string
}

const Task = ({ text }: props) => {
	return <TaskWrapper>{text}</TaskWrapper>
}

export default Task
