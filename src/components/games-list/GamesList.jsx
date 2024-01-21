import { CartProvider } from '../../providers/CartProvider';
import { FiltersProvider } from '../../providers/FiltersProvider';
import Cart from '../cart/Cart';
import Filters from '../filters/Filters';
import GamesSection from '../games-section/GamesSection';
import { StyledGameList } from './styles';

const GamesList = () => {
	return (
		<StyledGameList>
			<FiltersProvider>
				<Filters />
				<CartProvider>
					<GamesSection />
					<div>
						<h2>CHECKOUT</h2>
						<Cart />
					</div>
				</CartProvider>
			</FiltersProvider>
		</StyledGameList>
	);
};

export default GamesList;
