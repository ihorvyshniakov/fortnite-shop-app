import BasketItem from './BasketItem';

const BasketList = ({
	orders = [],
	handleBasketShow = Function.prototype,
	removeOrder = Function.prototype,
	incrementQuantity = Function.prototype,
	decrementQuantity = Function.prototype
}) => {
	const totalPrice = orders.reduce((sum, el) => {
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
				orders.map(item => (
					<BasketItem
						key={item.id}
						removeOrder={removeOrder}
						decrementQuantity={decrementQuantity}
						incrementQuantity={incrementQuantity}
						{...item}
					/>
				))
			) : (
				<li className='collection-item'>No products</li>
			)}
			<li className='collection-item active'>Total: {totalPrice}$</li>
		</ul>
	);
};

export default BasketList;
