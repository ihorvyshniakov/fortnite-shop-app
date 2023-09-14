const GoodsItem = props => {
	const {
		item: {
			mainId,
			displayName,
			displayDescription,
			price: { finalPrice },
			granted: {
				images: { full_background }
			}
		},
		addOrder
	} = props;

	return (
		<div className='card' id={mainId}>
			<div className='card-image'>
				<img src={full_background} alt={displayName} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{displayName}</span>
				<p>{displayDescription}</p>
			</div>
			<div className='card-action'>
				<button
					className='btn'
					onClick={() =>
						addOrder({
							...props.item,
							quantity: 1
						})
					}
				>
					BUY
				</button>
				<span className='right' style={{ fontSize: '1.5rem' }}>
					{finalPrice}$
				</span>
			</div>
		</div>
	);
};

export default GoodsItem;
