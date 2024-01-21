import { v4 } from 'uuid';
import { PRODUCTS } from '../constants/products';

export const getPlattforms = () => {
	const plataformsSet = new Set();

	PRODUCTS.forEach(producto => {
		producto.platforms.forEach(plataform => {
			plataformsSet.add(plataform.name);
		});
	});

	const platformsArray = [...plataformsSet].map(platform => ({
		id: v4(),
		platform
	}));

	return platformsArray;
};
