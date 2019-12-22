import React from 'react';
import { verify, token } from '../helpers/user';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { username, role } = verify(token);
        return (
        <div>
            <h1> Hello {username};</h1>
            <h2> You are {role}, in this App </h2>
        </div>
       )
    }
}

export default Admin;