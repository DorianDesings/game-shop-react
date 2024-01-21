import styled from 'styled-components';

const StyledGame = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const StyledGameImage = styled.img`
	width: 175px;
`;

const StyledGameName = styled.h2`
	font-size: 1rem;
	font-weight: bold;
`;

const StyledGameFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledBuyButton = styled.button`
	padding: 0.5rem;
	color: #fff;
	background-color: darkorange;
	border: none;
	cursor: pointer;
	&:active {
		transform: scale(0.95);
	}
`;

export {
	StyledBuyButton,
	StyledGame,
	StyledGameFooter,
	StyledGameImage,
	StyledGameName
};
