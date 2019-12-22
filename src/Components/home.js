import React from 'react';
import Admin from './admin';
import Client from './client';
import Staff from './staff';
import { verify, token } from '../helpers/user';
import { Button } from 'react-bootstrap';
import Login from './login';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: verify(token),
            isLoggedIn: true,
        };
        this.home = this.home.bind(this);
        this.logout = this.logout.bind(this);
    }
    home() {
        const { role, username } = this.state.user;
        switch (role) {
            case 'admin':
                return <Admin username={username} role={role} />;
            case 'staff':
                return <Staff username={username} role={role} />
            default:
                return <Client username={username} role={role} />
        }
    }
    logout(event) {
        event.preventDefault();
        window.localStorage.removeItem('token');
        this.setState({ isLoggedIn: false });
    }
    render() {
        const { isLoggedIn } = this.state;
        return !isLoggedIn ? <Login /> : (
            <div className='container'>
               {this.home()}
               <Button onClick={this.logout}> Log out </Button>
            </div>
        );
    }
}

export default Home;
