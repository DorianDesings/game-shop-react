import { getPlattforms } from '../../utils/get-platforms';
import FilterPlatform from '../filter-platform/FilterPlatform';

const Filters = ({ filters, setFilters }) => {
	const allPlatforms = getPlattforms();
	return (
		<div>
			<h2>Platform</h2>
			{allPlatforms.map(({ id, platform }) => (
				<FilterPlatform
					key={id}
					checked={filters[platform]}
					platform={platform}
					changeFilter={checked =>
						changeFilter(filters, setFilters, platform, checked)
					}
				/>
			))}
		</div>
	);
};

const changeFilter = (filters, setFilters, platform, checked) => {
	const newFilters = {
		...filters,
		[platform]: checked
	};

	setFilters(newFilters);
};

export default Filters;
