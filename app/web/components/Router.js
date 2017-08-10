import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import HelloWorld from '../containers/Helloworld';

export default class Home extends Component {
  render() {
    return (
    <div>
      <header>
        <nav className='navbar navbar-default'>
          <ul className='nav navbar-nav navbar-right'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/helloworld'>HelloWorld</Link></li>
          </ul>
        </nav>
      </header>
    <Switch>
      <Route exact path='/' component={h}/>
      <Route path='/helloworld' component={HelloWorld}/>
    </Switch>
     </div>
    )
  }
}

const h = () => (<h1 className='center-block text-center'>Hello from HomePage!</h1>)





