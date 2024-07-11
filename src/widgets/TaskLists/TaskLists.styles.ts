import styled from 'styled-components'

export const StyledList = styled.div`
	width: 275px;
	height: max-content;
	padding: 10px;
	background: var(--bg-list);
	padding-bottom: 8px;
	border-radius: var(--border-r-big);
	box-shadow:
		0px 1px 1px #091e4240,
		0px 0px 1px #091e424f;

	display: flex;
	flex-direction: column;

	gap: 10px;
`
export const Content = styled.div`
	justify-self: start;

	display: grid;
	gap: 10px;
`
export const Footer = styled.footer`
	font-size: var(--fz-small);
`

export const Title = styled.h3`
	align-self: start;

	position: relative;
	width: 100%;

	display: flex;
	justify-self: start;

	font-size: var(--fz-title);
`

export const Button = styled.button`
	padding: 5px 10px;
	background: transparent;
	border: 1px solid transparent;
	border-radius: var(--border-r-base);
	transition: background 0.3s linear;

	color: inherit;

	&:hover {
		background: var(--bg-light);
	}
`
