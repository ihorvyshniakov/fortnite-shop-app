import { ReactComponent as GithubSVG } from '../sources/github.svg';

const Footer = () => {
	return (
		<footer className='page-footer'>
			<div className='container'>
				© 2023 Developed by Vyshniakov Ihor
				<a
					className='grey-text text-lighten-4 right icon-link'
					target='_blank'
					rel='noreferrer'
					href='https://github.com/ihorvyshniakov/fortnite-shop'
				>
					<GithubSVG className='icon' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
