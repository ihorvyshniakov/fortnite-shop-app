import GoodsItem from './GoodsItem';
import NotFound from './NotFound';

const GoodsList = ({ goods = [] }) => {
	if (!goods.length) {
		return <NotFound />;
	}

	return (
		<div className='goods'>
			{goods.map(item => (
				<GoodsItem key={item.offerId} {...item} />
			))}
		</div>
	);
};

export default GoodsList;
