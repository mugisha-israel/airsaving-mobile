import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Home from './home';
import Signup from './signup';
import Dashboard from './dashboard';
import NotFound from './notfound';

toast.configure();
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { isLogged } = this.props;
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/signup' component={Signup} />
					<Route
						exact
						path='/dashboard'
						render={props => (isLogged ? <Dashboard /> : <Redirect to='/signup' />)}
					/>
					<Route path='*' component={NotFound}></Route>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
