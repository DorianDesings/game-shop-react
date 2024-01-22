import { useContext } from 'react';
import { PRODUCTS } from '../constants/products';
import { FiltersContext } from '../contexts/filtersContext';

export const useFilters = () => {
	const { filters, setFilters, sortBy, setSortBy } = useContext(FiltersContext);

	let filteredGames = filterByPlatform(PRODUCTS, filters);
	filteredGames = sortGames(filteredGames, sortBy);

	const changeFilter = (platform, checked) => {
		const newFilters = {
			...filters,
			[platform]: checked
		};

		setFilters(newFilters);
	};

	return { filters, changeFilter, filteredGames, setSortBy };
};

const sortGames = (games, sortBy) => {
	const sortedGames = [...games];
	const sortValue = Number(sortBy);
	console.log(sortedGames);
	switch (sortValue) {
		case 0:
			return sortedGames;
		case 1:
			sortedGames.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
			return sortedGames;
	}
};

const filterByPlatform = (PRODUCTS, filters) => {
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
