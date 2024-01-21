import { useCart } from '../../hooks/useCart';
import {
	StyledButtonRemove,
	StyledCartGameImageContainer,
	StyledGameAmount,
	StyledPlatformGame
} from './styles';

const Cart = () => {
	const { cart, totalPrice, isCartEmpty, deleteProduct } = useCart();

	if (isCartEmpty) return <p>No products</p>;

	return (
		<div>
			{cart.map(({ id, image, platformName, amount, price }) => (
				<div key={id}>
					<StyledCartGameImageContainer>
						<img src={image} alt='' />
						<StyledPlatformGame>{platformName}</StyledPlatformGame>
						{amount > 1 && <StyledGameAmount>{amount}</StyledGameAmount>}
						<StyledButtonRemove onClick={() => deleteProduct(id)}>
							Delete
						</StyledButtonRemove>
					</StyledCartGameImageContainer>
					<p>Price: {(price * amount).toFixed(2)} €</p>
				</div>
			))}

			{!isCartEmpty && <p>Total: {totalPrice} €</p>}
		</div>
	);
};

export default Cart;
