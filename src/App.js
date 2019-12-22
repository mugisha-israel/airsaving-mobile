import React from 'react';
import Home from './Components/home';
import Login from './Components/login';
import { token } from './helpers/user';

class App extends React.Component {
  render() {
    return (token ? <Home /> : <Login />);
  }
}

export default App;

