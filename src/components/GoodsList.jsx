import GoodsItem from './GoodsItem';

const GoodsList = ({ goods = [] }) => {
	if (!goods.length) {
		return <h3>There is no goods </h3>;
	}

	return (
		<div className='goods'>
			{goods.map(item => (
				<GoodsItem key={item.mainId} {...item} />
			))}
		</div>
	);
};

export default GoodsList;
