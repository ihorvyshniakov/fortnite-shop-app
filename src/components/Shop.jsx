import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../../config';

import { ShopContext } from '../context';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import filterShopItems from '../utils/filterShopItems';
import BasketList from './BasketList';
import Alert from './Alert';

// TODO: save cart in localStorage
// TODO: add button clear all cart

const Shop = () => {
	const { loading, orders, isBasketShow, alertName, setGoods } =
		useContext(ShopContext);

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY
			}
		})
			.then(response => response.json())
			.then(data => {
				const filteredItems = filterShopItems(data?.shop);
				setGoods(filteredItems);
			});
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Preloader />;
	}

	return (
		<main className='container content'>
			<Cart quantity={orders.length} />
			<GoodsList />
			{isBasketShow && <BasketList />}
			{alertName && <Alert />}
		</main>
	);
};

export default Shop;
