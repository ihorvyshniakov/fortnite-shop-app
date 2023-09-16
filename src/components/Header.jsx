import { ReactComponent as GithubSVG } from '../sources/github.svg';

const Header = () => {
	return (
		<nav className='header'>
			<div className='nav-wrapper container'>
				<a href='/' className='brand-logo'>
					Fortnite shop
				</a>
				<ul id='nav-mobile' className='right'>
					<li>
						<a
							className='icon-link right'
							href='https://github.com/ihorvyshniakov/fortnite-shop-app'
							target='_blank'
							rel='noreferrer'
						>
							<GithubSVG />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
