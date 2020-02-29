import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/images/logo_n.png';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div class='container'>
				<Link to='/'>
					<img src={Logo} className='icon' alt='logo'></img>
				</Link>
			</div>
		);
	}
}

export default Header;
