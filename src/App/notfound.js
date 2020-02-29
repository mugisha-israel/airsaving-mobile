import React from 'react';
import { Link } from 'react-router-dom';
import Crying from '../Assets/images/crying.gif';

class NotFound extends React.Component {
	render() {
		return (
			<div className='container d-flex justify-content-center w-100 mt-5 pt-5'>
				<div className='error-template'>
					<h1 className='text-secondary'>Oops!</h1>
					<img src={Crying} alt='crying emoji' className='' />
					<div className='error-details'>
						Sorry, an error has occured, Requested page not found!
					</div>
					<Link to='/'> go back home </Link>
				</div>
			</div>
		);
	}
}

export default NotFound;
