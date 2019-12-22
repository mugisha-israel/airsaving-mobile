import React from 'react';
import users from '../helpers';
import { sign } from '../helpers/user';
import Home from './home';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: 'Login to continue',
            errorClass: 'font-weight-bolder text-muted ml-5',
            isLogged: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { id, value } = event.target;
        this.setState({ [id] : value });
    }

    checkCredentials = (username, password) => 
    users.find(element => element.username === username && element.password === password);

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
        const user = this.checkCredentials(username, password);
        if (user) {
            const {password, ...data } = user;
            window.localStorage.setItem('token', sign(data));
            this.setState({ isLogged: true });
        }
        this.setState({
            error: 'Invalid username or password',
            errorClass: 'text-danger ml-4'
        })
    }

    render() {
        const { error, errorClass, isLogged } = this.state;
        return isLogged ? <Home /> : (
        <div className='container main'>
        <h3 className={errorClass}> {error} </h3>
          <form onSubmit={this.handleSubmit} className='mt-5'>
            <input
            className='form-control p-4 my-3 font-weight-bold'
            id='username'
            onChange={this.handleChange}
            placeholder='username'
            type='text'
            />
            <input
            className='form-control p-4 my-3 font-weight-bold'
            id='password'
            onChange={this.handleChange}
            placeholder='password'
            type='password'
            />
            <input type='submit' className='form-control p-2 my-3 btn btn-primary' value = 'Login' />
            <span className='text-primary'> Forgot password? </span>
           </form>
        </div>
        )
    }
}

export default Login;