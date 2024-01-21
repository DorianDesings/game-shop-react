import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import GamePlatforms from '../game-platforms/GamePlatforms';
import {
	StyledBuyButton,
	StyledGame,
	StyledGameFooter,
	StyledGameImage,
	StyledGameName
} from './styles';

const Game = ({ image, name, platforms }) => {
	const { addProductToCart } = useCart();
	const [activePlatform, setActivePlatform] = useState(0);
	const gamePlatform = platforms[activePlatform] || platforms[0];

	return (
		<div>
			<StyledGame>
				<StyledGameImage src={image} alt='' />
				<GamePlatforms
					platforms={platforms}
					activePlatform={platforms[activePlatform] ? activePlatform : 0}
					setActivePlatform={setActivePlatform}
				/>
			</StyledGame>
			<StyledGameName>{name}</StyledGameName>
			<StyledGameFooter>
				<StyledBuyButton
					onClick={() => addProductToCart(name, image, gamePlatform)}
				>
					Add to cart
				</StyledBuyButton>
				<span>{gamePlatform?.price} €</span>
			</StyledGameFooter>
		</div>
	);
};

export default Game;
