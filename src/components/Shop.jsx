import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import filterShopItems from '../utils/filterShopItems';
import BasketList from './BasketList';

const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [orders, setOrders] = useState([]);
	const [isBasketShow, setIsBasketShow] = useState(false);

	const addOrder = newItem => {
		setOrders(prevOrder => {
			const isItemAlreadyBought = prevOrder.some(
				oldItem => oldItem.id === newItem.id
			);

			if (!isItemAlreadyBought) {
				return [
					...prevOrder,
					{
						...newItem,
						quantity: 1
					}
				];
			}

			return prevOrder.map(i => {
				if (i.id !== newItem.id) {
					return i;
				}
				return {
					...i,
					quantity: i.quantity++
				};
			});
		});
	};

	const removeOrder = itemId => {
		const newOrders = orders.filter(el => el.id !== itemId);
		setOrders(newOrders);
	};

	const handleBasketShow = () => {
		setIsBasketShow(!isBasketShow);
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
			<Cart
				quantity={orders.length}
				handleBasketShow={handleBasketShow}
			/>
			<GoodsList goods={goods} addOrder={addOrder} />
			{isBasketShow && (
				<BasketList
					orders={orders}
					handleBasketShow={handleBasketShow}
					removeOrder={removeOrder}
				/>
			)}
		</main>
	);
};

export default Shop;
