import { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = ({
	id,
	name,
	price,
	quantity,
	removeOrder = Function.prototype,
	incrementQuantity = Function.prototype,
	decrementQuantity = Function.prototype
}) => {
	const { example } = useContext(ShopContext);
	console.log('example: ', example);

	return (
		<li className='collection-item'>
			<div className='cart-item'>
				<span className='cart-item-name'>{name}</span>
				<div className='cart-item-quantityBlock'>
					<i
						className='material-icons'
						onClick={() => decrementQuantity(id)}
					>
						remove_circle
					</i>
					<span className='cart-item-quantity'>{quantity}</span>
					<i
						className='material-icons'
						onClick={() => incrementQuantity(id)}
					>
						add_circle
					</i>
				</div>
				<span className='cart-item-finalPrice'>
					{price * quantity}$
				</span>
			</div>
			<span className='secondary-content' onClick={() => removeOrder(id)}>
				<i className='material-icons basket-delete'>close</i>
			</span>
		</li>
	);
};

export default BasketItem;
