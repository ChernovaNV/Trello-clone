import styled from 'styled-components'

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.75);
	overflow-x: hidden;
	overflow-y: auto;
	//opacity: 0;
	transition: opacity 0.3s;
	z-index: 100;
`

export const Wrapper = styled.div`
	position: absolute;
	inset: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`
export const Content = styled.div`
	position: relative;
	padding: 20px;
	width: 600px;
	border-radius: var(--border-r-big);
	background-color: var(--bg-task);

	display: grid;
	gap: 30px;

	p {
		margin-bottom: 10px;
	}
`
export const CloseWrapper = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
`
