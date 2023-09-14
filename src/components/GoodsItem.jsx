const GoodsItem = props => {
	const {
		item: { id, name, description, price, imageURL },
		addOrder = Function.prototype
	} = props;

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={imageURL} alt={name} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{name}</span>
				<p>{description}</p>
			</div>
			<div className='card-action'>
				<button
					className='btn'
					onClick={() =>
						addOrder({
							id,
							name,
							price
						})
					}
				>
					BUY
				</button>
				<span className='right' style={{ fontSize: '1.5rem' }}>
					{price}$
				</span>
			</div>
		</div>
	);
};

export default GoodsItem;
