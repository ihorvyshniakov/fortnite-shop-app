import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';

const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [orders, setOrders] = useState([]);

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY
			}
		})
			.then(response => response.json())
			.then(data => {
				const filtererGoods = data?.shop?.slice(0, 20).map(item => {
					return {
						...item,
						granted: {
							...item.granted[item.granted.length - 1]
						}
					};
				});
				filtererGoods && setGoods([...filtererGoods]);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Preloader />;
	}

	return (
		<main className='container content'>
			<Cart quantity={orders.length} />
			<GoodsList goods={goods} />
		</main>
	);
};

export default Shop;
