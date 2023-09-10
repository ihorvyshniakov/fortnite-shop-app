import NotFoundImg from '../sources/not-found.png';

const NotFound = () => {
	return (
		<div className='not-found'>
			<img src={NotFoundImg} alt='Nothing found' />
			<h3>We didn't find anything</h3>
		</div>
	);
};

export default NotFound;
