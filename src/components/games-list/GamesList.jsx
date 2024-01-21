import { useState } from 'react';
import Cart from '../cart/Cart';
import Filters from '../filters/Filters';
import GamesSection from '../games-section/GamesSection';
import { StyledGameList } from './styles';

const GamesList = () => {
	const [cart, setCart] = useState([]);
	const [filters, setFilters] = useState({
		PC: false,
		PS4: false,
		PS5: false,
		Xbox: false
	});
	return (
		<StyledGameList>
			<Filters filters={filters} setFilters={setFilters} />
			<GamesSection
				cart={cart}
				setCart={setCart}
				filters={filters}
				setFilters={setFilters}
			/>
			<div>
				<h2>CHECKOUT</h2>
				<Cart cart={cart} setCart={setCart} />
			</div>
		</StyledGameList>
	);
};

export default GamesList;
