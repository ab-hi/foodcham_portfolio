import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar';

import Features from './components/features/features';
import Home from './components/home';
import Services from './components/services/services';
import Blog from './components/blog/blog';
import About from './components/about/about';
import Footer from './components/footer'


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Navbar />
            <Route exact path ="/" component={Home} />
            <Route path ="/features" component={Features} />
            <Route path ="/services" component={Services} />
            <Route path ="/blog" component={Blog} />
            <Route path ="/about" component={About} />
            <Footer />
        </div>
      </Router>
      
      </div>
    );
  }
}

export default App;
