import { useFilters } from '../../hooks/useFilters';

const SortByGames = () => {
	const { setSortBy } = useFilters();
	return (
		<div>
			<select name='' onChange={event => setSortBy(event.target.value)}>
				<option value={0}>Default</option>
				<option value={1}>Name</option>
			</select>
		</div>
	);
};

export default SortByGames;
