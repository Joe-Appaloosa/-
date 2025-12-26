import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {
	return (
		<div className='navbar'>
			<Link to='/' className='logo'>
				LIN
			</Link>
			<ul className='menu'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/artworks'>Artworks</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<a
						href='https://www.instagram.com/eva_linika/'
						title="cowboy's-wife"
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-instagram'></i>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Header
