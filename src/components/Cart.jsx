import { useContext } from 'react';
import { ShopContext } from '../context';

const Cart = () => {
	const { orders, handleBasketShow = Function.prototype } =
		useContext(ShopContext);
	const quantity = orders.length;

	return (
		<div
			className='cart #fbc02d yellow darken-2'
			onClick={handleBasketShow}
		>
			<i className='material-icons'>shopping_cart</i>
			{quantity ? (
				<span className='cart-quantity'>{quantity}</span>
			) : null}
		</div>
	);
};

export default Cart;
