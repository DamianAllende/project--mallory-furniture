import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './css/styles.css';

import Header from './component/Header'
import Home from './component/Home'
import About from './component/About'
import Terms from './component/Terms'
import Footer from './component/Footer'
import All from './component/All'
import Section from './component/Section'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      
	        <Switch>
	          <Route exact path='/' component={Home} />
	          <Route exact path='/about' component={About} />
	          <Route exact path='/terms' component={Terms} />
            <Route exact path='/all' component={All} />
            <Route exact path='/section/:cat' component={Section} />
	        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
