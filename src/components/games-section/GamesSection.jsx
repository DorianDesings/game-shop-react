import Games from '../games/Games';

const GamesSection = ({ filters, setFilters, cart, setCart }) => {
	return (
		<div>
			<h2>Games</h2>
			<Games
				cart={cart}
				setCart={setCart}
				filters={filters}
				setFilters={setFilters}
			/>
		</div>
	);
};

export default GamesSection;
