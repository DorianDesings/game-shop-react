import { v4 } from 'uuid';

export const PRODUCTS = [
	{
		id: v4(),
		name: 'Spiderman 2',
		platforms: [{ id: v4(), name: 'PS5', price: 54.99 }],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co79vq.png',
		releaseDate: 2023
	},
	{
		id: v4(),
		name: 'God of War Ragnarök',
		platforms: [
			{ id: v4(), name: 'PS4', price: 54.99 },
			{ id: v4(), name: 'PS5', price: 62.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png',
		releaseDate: 2022
	},
	{
		id: v4(),
		name: 'God of War',
		platforms: [
			{ id: v4(), name: 'PC', price: 17.29 },
			{ id: v4(), name: 'PS4', price: 15.99 },
			{ id: v4(), name: 'PS5', price: 25.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png',
		releaseDate: 2018
	},
	{
		id: v4(),
		name: 'Cuphead',
		platforms: [
			{ id: v4(), name: 'PC', price: 17.19 },
			{ id: v4(), name: 'PS4', price: 33.83 },
			{ id: v4(), name: 'Xbox', price: 29.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co65ip.png',
		releaseDate: 2017
	},
	{
		id: v4(),
		name: 'Overcooked! All You Can Eat',
		platforms: [
			{ id: v4(), name: 'PC', price: 22.54 },
			{ id: v4(), name: 'PS4', price: 39.99 },
			{ id: v4(), name: 'PS5', price: 19.99 },
			{ id: v4(), name: 'Xbox', price: 19.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2t83.png',
		releaseDate: 2020
	},
	{
		id: v4(),
		name: 'Farming Tractor Simulator',
		platforms: [
			{ id: v4(), name: 'PC', price: 39.99 },
			{ id: v4(), name: 'PS5', price: 49.99 },
			{ id: v4(), name: 'Xbox', price: 39.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co597d.png',
		releaseDate: 2023
	},
	{
		id: v4(),
		name: 'Lies of P',
		platforms: [
			{ id: v4(), name: 'PC', price: 59.99 },
			{ id: v4(), name: 'PS4', price: 59.99 },
			{ id: v4(), name: 'PS5', price: 59.99 },
			{ id: v4(), name: 'Xbox', price: 59.99 }
		],
		image: ' https://images.igdb.com/igdb/image/upload/t_cover_big/co6lxr.png',
		releaseDate: 2023
	},
	{
		id: v4(),
		name: 'Resident Evil 4',
		price: 47.99,
		platforms: [
			{ id: v4(), name: 'PC', price: 21.45 },
			{ id: v4(), name: 'PS4', price: 49.99 },
			{ id: v4(), name: 'PS5', price: 49.99 },
			{ id: v4(), name: 'Xbox', price: 43.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png',
		releaseDate: 2023
	},
	{
		id: v4(),
		name: 'Ori and the Will of the Wisps',
		price: 44.99,
		platforms: [
			{ id: v4(), name: 'PC', price: 29.99 },
			{ id: v4(), name: 'Xbox', price: 9.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2e1l.png',
		releaseDate: 2020
	},
	{
		id: v4(),
		name: 'Ori and the Blind Forest',
		platforms: [
			{ id: v4(), name: 'PC', price: 19.99 },
			{ id: v4(), name: 'Xbox', price: 8.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1y41.png',
		releaseDate: 2015
	},
	{
		id: v4(),
		name: 'The Last of Us Part I Remake',
		platforms: [
			{ id: v4(), name: 'PC', price: 34.89 },
			{ id: v4(), name: 'PS5', price: 44.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5xex.png',
		releaseDate: 2022
	},
	{
		id: v4(),
		name: 'The Last of Us Part II',
		platforms: [{ id: v4(), name: 'PS4', price: 44.99 }],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.png',
		releaseDate: 2020
	},
	{
		id: v4(),
		name: 'Red Dead Redemption 2',
		platforms: [
			{ id: v4(), name: 'PC', price: 59.99 },
			{ id: v4(), name: 'PS4', price: 59.99 },
			{ id: v4(), name: 'Xbox', price: 59.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.png',
		releaseDate: 2018
	},
	{
		id: v4(),
		name: 'Sekiro: Shadows Die Twice',
		platforms: [
			{ id: v4(), name: 'PC', price: 27.3 },
			{ id: v4(), name: 'PS4', price: 35.89 },
			{ id: v4(), name: 'Xbox', price: 29.99 }
		],
		image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2a23.png',
		releaseDate: 2019
	}
];
