import styled from 'styled-components';

const StyledButtonPlatform = styled.button`
	display: block;
	margin-bottom: 0.5rem;
	width: 50px;
	padding: 0.5rem;
	border: 1px solid steelblue;
	color: aliceblue;
	background: ${({ $active }) => ($active ? 'steelblue' : 'none')};
`;

export { StyledButtonPlatform };
