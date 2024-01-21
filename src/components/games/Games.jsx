import { PRODUCTS } from '../../constants/products';
import Game from '../game/Game';
import { StyledGames } from './styles';

const Games = ({ filters, cart, setCart }) => {
	const filteredGames = filterByPlatform(filters, PRODUCTS);
	return (
		<StyledGames>
			{filteredGames.map(game => {
				return <Game key={game.id} cart={cart} setCart={setCart} {...game} />;
			})}
		</StyledGames>
	);
};

const filterByPlatform = (filters, PRODUCTS) => {
	const filtersActive = Object.values(filters).filter(filter => filter);

	if (!filtersActive.length) return [...PRODUCTS];

	const filteredProductsByPlatform = PRODUCTS.filter(game => {
		return game.platforms.some(platform => filters[platform.name]);
	});

	const updatedPlatforms = filteredProductsByPlatform.map(game => {
		const filteredPlatforms = game.platforms.filter(
			platform => filters[platform.name]
		);
		return { ...game, platforms: filteredPlatforms };
	});

	return updatedPlatforms;
};

export default Games;
