import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import filterShopItems from '../utils/filterShopItems';

const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [orders, setOrders] = useState([]);

	const addOrder = newItem => {
		setOrders(prevOrder => {
			const isItemAlreadyBought = prevOrder.some(
				oldItem => oldItem.offerId === newItem.offerId
			);

			if (!isItemAlreadyBought) {
				return [...prevOrder, newItem];
			}

			return prevOrder.map(i => {
				if (i.offerId !== newItem.offerId) {
					return i;
				}
				return {
					...i,
					quantity: i.quantity++
				};
			});
		});
	};

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY
			}
		})
			.then(response => response.json())
			.then(data => {
				const filteredItems = filterShopItems(data?.shop);
				setGoods([...filteredItems]);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Preloader />;
	}

	return (
		<main className='container content'>
			<Cart quantity={orders.length} />
			<GoodsList goods={goods} addOrder={addOrder} />
		</main>
	);
};

export default Shop;
