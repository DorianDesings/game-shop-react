import { useContext } from 'react';
import { FiltersContext } from '../contexts/filtersContext';

export const useFilters = () => {
	const { filters, setFilters } = useContext(FiltersContext);

	const changeFilter = (platform, checked) => {
		const newFilters = {
			...filters,
			[platform]: checked
		};

		setFilters(newFilters);
	};

	return { filters, changeFilter };
};
