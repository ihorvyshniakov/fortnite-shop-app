import { useContext } from 'react';
import BasketItem from './BasketItem';
import { ShopContext } from '../context';

const BasketList = () => {
	const { orders = [], handleBasketShow = Function.prototype } =
		useContext(ShopContext);

	const totalPrice = orders?.reduce((sum, el) => {
		return sum + el.price * el.quantity;
	}, 0);

	return (
		<ul className='collection basket-list'>
			<li className='collection-item active'>
				Cart
				<i
					className='material-icons basket-close'
					onClick={handleBasketShow}
				>
					close
				</i>
			</li>
			{orders.length ? (
				orders.map(item => <BasketItem key={item.id} {...item} />)
			) : (
				<li className='collection-item'>No products</li>
			)}
			<li className='collection-item'>
				Total: {totalPrice}$
				<button className='secondary-content btn'>Pay</button>
			</li>
		</ul>
	);
};

export default BasketList;
