import { useContext } from 'react';
import { PRODUCTS } from '../constants/products';
import { FiltersContext } from '../contexts/filtersContext';

export const useFilters = () => {
	const { filters, setFilters } = useContext(FiltersContext);

	const filteredGames = filterByPlatform(filters, PRODUCTS);

	const changeFilter = (platform, checked) => {
		const newFilters = {
			...filters,
			[platform]: checked
		};

		setFilters(newFilters);
	};

	return { filters, changeFilter, filteredGames };
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
