import {
	StyledButtonRemove,
	StyledCartGameImageContainer,
	StyledGameAmount,
	StyledPlatformGame
} from './styles';

const Cart = ({ cart, setCart }) => {
	const totalPrice = calculateTotalPrice(cart);

	if (cart.length === 0) return <p>No products</p>;

	return (
		<div>
			{cart.map(game => (
				<div key={game.id}>
					<StyledCartGameImageContainer>
						<img src={game.image} alt='' />
						<StyledPlatformGame>{game.platformName}</StyledPlatformGame>
						{game.amount > 1 && (
							<StyledGameAmount>{game.amount}</StyledGameAmount>
						)}
						<StyledButtonRemove
							onClick={() => deleteProduct(cart, setCart, game.id)}
						>
							Delete
						</StyledButtonRemove>
					</StyledCartGameImageContainer>
					<p>Price: {(game.price * game.amount).toFixed(2)} €</p>
				</div>
			))}

			{totalPrice !== 0 && <p>Total: {totalPrice.toFixed(2)} €</p>}
		</div>
	);
};

const calculateTotalPrice = cart => {
	return cart.reduce((acc, game) => game.price * game.amount + acc, 0);
};

const deleteAllProducts = (cart, setCart, id) => {
	const updatedCart = cart.filter(cartProduct => cartProduct.id !== id);

	setCart(updatedCart);
};

const deleteProduct = (cart, setCart, id) => {
	const productToDelete = cart.find(cartProduct => cartProduct.id === id);

	if (productToDelete.amount === 1) {
		deleteAllProducts(cart, setCart, id);
		return;
	}

	const updatedCart = cart.map(cartProduct => {
		console.log(cartProduct);
		if (cartProduct.id === id) cartProduct.amount--;
		console.log(cartProduct);
		return cartProduct;
	});

	setCart(updatedCart);
};

export default Cart;
