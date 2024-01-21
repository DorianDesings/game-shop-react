import { useFilters } from '../../hooks/useFilters';
import Game from '../game/Game';
import { StyledGames } from './styles';

const Games = () => {
	const { filteredGames } = useFilters();

	return (
		<StyledGames>
			{filteredGames.map(game => {
				return <Game key={game.id} {...game} />;
			})}
		</StyledGames>
	);
};

export default Games;
