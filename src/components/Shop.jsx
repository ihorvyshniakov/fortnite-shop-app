import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';

const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY
			}
		})
			.then(response => response.json())
			.then(data => {
				const filtererGoods = data?.shop?.map(item => {
					return {
						...item,
						granted: {
							...item.granted[0]
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
			<GoodsList goods={goods} />
		</main>
	);
};

export default Shop;
