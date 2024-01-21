import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cartContext';
import GamePlatforms from '../game-platforms/GamePlatforms';
import {
	StyledBuyButton,
	StyledGame,
	StyledGameFooter,
	StyledGameImage,
	StyledGameName
} from './styles';

const Game = ({ image, name, platforms }) => {
	const { cart, setCart } = useContext(CartContext);
	const [activePlatform, setActivePlatform] = useState(0);
	const gamePlatform = platforms[activePlatform];
	return (
		<div>
			<StyledGame>
				<StyledGameImage src={image} alt='' />

				<GamePlatforms
					platforms={platforms}
					activePlatform={activePlatform}
					setActivePlatform={setActivePlatform}
				/>
			</StyledGame>
			<StyledGameName>{name}</StyledGameName>
			<StyledGameFooter>
				<StyledBuyButton
					onClick={() =>
						addProductToCart(cart, setCart, name, image, gamePlatform)
					}
				>
					Add to cart
				</StyledBuyButton>
				<span>{gamePlatform.price} €</span>
			</StyledGameFooter>
		</div>
	);
};

const addProductToCart = (
	cart,
	setCart,
	gameName,
	image,
	{ id, name: platformName, price }
) => {
	const game = cart.find(game => game.id === id);

	if (!game) {
		setCart([...cart, { id, gameName, image, platformName, price, amount: 1 }]);
		return;
	}

	const updatedCart = cart.map(game => {
		if (game.id === id) game.amount++;
		return game;
	});

	setCart(updatedCart);
};

export default Game;
