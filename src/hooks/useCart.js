import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

export const useCart = () => {
	const { cart, setCart } = useContext(CartContext);

	const isCartEmpty = cart.length === 0;

	const totalPrice = calculateTotalPrice(cart);

	const addProductToCart = (
		gameName,
		image,
		{ id, name: platformName, price }
	) => {
		const game = cart.find(game => game.id === id);

		if (!game) {
			setCart([
				...cart,
				{ id, gameName, image, platformName, price, amount: 1 }
			]);
			return;
		}

		const updatedCart = cart.map(game => {
			if (game.id === id) game.amount++;
			return game;
		});

		setCart(updatedCart);
	};

	const deleteAllProducts = id => {
		const updatedCart = cart.filter(cartProduct => cartProduct.id !== id);

		setCart(updatedCart);
	};

	const deleteProduct = id => {
		const productToDelete = cart.find(cartProduct => cartProduct.id === id);

		if (productToDelete.amount === 1) {
			deleteAllProducts(id);
			return;
		}

		const updatedCart = cart.map(cartProduct => {
			if (cartProduct.id === id) cartProduct.amount--;
			return cartProduct;
		});

		setCart(updatedCart);
	};

	return { cart, totalPrice, isCartEmpty, addProductToCart, deleteProduct };
};

const calculateTotalPrice = cart => {
	return cart
		.reduce((acc, game) => game.price * game.amount + acc, 0)
		.toFixed(2);
};
