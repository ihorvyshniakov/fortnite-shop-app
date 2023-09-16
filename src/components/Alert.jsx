import { useEffect } from 'react';

const Alert = ({ name = '', closeAlert = Function.prototype }) => {
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
