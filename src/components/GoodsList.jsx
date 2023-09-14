import GoodsItem from './GoodsItem';
import NotFound from './NotFound';

const GoodsList = ({ goods = [], addOrder }) => {
	if (!goods.length) {
		return <NotFound />;
	}

	return (
		<div className='goods'>
			{goods.map(item => (
				<GoodsItem key={item.offerId} addOrder={addOrder} item={item} />
			))}
		</div>
	);
};

export default GoodsList;
