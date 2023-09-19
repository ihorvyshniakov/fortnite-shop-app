import { useContext } from 'react';
import GoodsItem from './GoodsItem';
import NotFound from './NotFound';
import { ShopContext } from '../context';

const GoodsList = () => {
	const { goods } = useContext(ShopContext);

	if (!goods.length) {
		return <NotFound />;
	}

	return (
		<div className='goods'>
			{goods.map(item => (
				<GoodsItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default GoodsList;
