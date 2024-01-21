import styled from 'styled-components';

const StyledCartGameImageContainer = styled.div`
	position: relative;
	width: 100px;
	margin-bottom: 1rem;
`;

const StyledPlatformGame = styled.span`
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 0.4rem;
	font-size: 0.8rem;
	color: black;
	background-color: orange;
`;

const StyledGameAmount = styled.span`
	position: absolute;
	top: -0.5rem;
	right: -0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	padding: 0.2rem;
	font-size: 0.8rem;
	color: black;
	background-color: white;
	border-radius: 50%;
`;

const StyledButtonRemove = styled.button`
	position: absolute;
	bottom: 0;
	right: -3.5rem;
	padding: 0.3rem;
	font-size: 0.8rem;
`;

export {
	StyledButtonRemove,
	StyledCartGameImageContainer,
	StyledGameAmount,
	StyledPlatformGame
};
