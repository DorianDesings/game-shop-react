import { useState } from 'react';
import { FiltersContext } from '../contexts/filtersContext';

export const FiltersProvider = ({ children }) => {
	const [filters, setFilters] = useState({
		PC: false,
		PS4: false,
		PS5: false,
		Xbox: false
	});

	const [sortBy, setSortBy] = useState(0);

	return (
		<FiltersContext.Provider value={{ filters, setFilters, sortBy, setSortBy }}>
			{children}
		</FiltersContext.Provider>
	);
};
