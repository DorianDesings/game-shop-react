import { useFilters } from '../../hooks/useFilters';
import { getPlattforms } from '../../utils/get-platforms';
import FilterPlatform from '../filter-platform/FilterPlatform';

const Filters = () => {
	const { filters, changeFilter } = useFilters();
	const allPlatforms = getPlattforms();
	return (
		<div>
			<h2>Platform</h2>
			{allPlatforms.map(({ id, platform }) => (
				<FilterPlatform
					key={id}
					checked={filters[platform]}
					platform={platform}
					changeFilter={checked => changeFilter(platform, checked)}
				/>
			))}
		</div>
	);
};

export default Filters;
