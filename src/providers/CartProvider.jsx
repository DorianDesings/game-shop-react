import { useState } from 'react';
import { CartContext } from '../contexts/cartContext';

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};
