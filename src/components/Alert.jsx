import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

const Alert = () => {
	const { alertName: name = '', closeAlert = Function.prototype } =
		useContext(ShopContext);

	useEffect(() => {
		const itemId = setTimeout(closeAlert, 3000);

		return () => {
			clearTimeout(itemId);
		};
		// eslint-disable-next-line
	}, [name]);

	return (
		<div id='toast-container'>
			<div className='toast'>{name} added to cart</div>
		</div>
	);
};

export default Alert;
