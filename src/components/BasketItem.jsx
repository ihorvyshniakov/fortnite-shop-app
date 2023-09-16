const BasketItem = ({
	id,
	name,
	price,
	quantity,
	removeOrder = Function.prototype
}) => {
	return (
		<li className='collection-item'>
			{name} x{quantity} = {price * quantity}$
			<span className='secondary-content' onClick={() => removeOrder(id)}>
				<i className='material-icons basket-delete'>close</i>
			</span>
		</li>
	);
};

export default BasketItem;
