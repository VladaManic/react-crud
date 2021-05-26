import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<div className='img-wrap'>
				<img src="https://yacenter.org/wp-content/uploads/2016/01/logo_placeholder-e1454205592862.png" alt="Logo" />
			</div>
			<nav className='navigation'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/add'>Add</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
