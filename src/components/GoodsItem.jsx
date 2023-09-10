const GoodsItem = props => {
	const {
		mainId,
		displayName,
		displayDescription,
		price: { finalPrice },
		granted: {
			images: { full_background }
		}
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
				<button className='btn'>Buy</button>
				<span className='right' style={{ fontSize: '1.5rem' }}>
					{finalPrice}$
				</span>
			</div>
		</div>
	);
};

export default GoodsItem;
