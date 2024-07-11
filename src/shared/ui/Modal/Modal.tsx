import CloseIcon from '../Icons/CloseIcon'

import { CloseWrapper, Content, Overlay, Wrapper } from './Modal.styles'

interface props {
	children: JSX.Element
}

export const Modal = ({ children }: props) => {
	return (
		<Overlay>
			<Wrapper>
				<Content>
					{children}
					<CloseWrapper>
						<CloseIcon width={20} height={20} fill='#b6c2cf' />
					</CloseWrapper>
				</Content>
			</Wrapper>
		</Overlay>
	)
}

export default Modal
