import React, { Component } from 'react';

import logo from './logo.svg';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar';

import Features from './components/features/features';
import Home from './components/home';
import Services from './components/services/services';
import Blog from './components/blog/blog';
import About from './components/about/about';
import Footer from './components/footer';
import Demo from './components/demo/demo';
// import BlogDetail from './components/blog/blogDetailView';
import Blog1 from './components/blog/blog1';
import Blog2 from './components/blog/blog2';
import Blog3 from  './components/blog/blog3';
import Blog4 from  './components/blog/blog4';
import HumansofFC from './components/blog/humnasofFC';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
            <Route exact path ="/" component={Home} />
            <Route path ="/features" component={Features} />
            <Route path ="/services" component={Services} />
            <Route path ="/blog" component={Blog} />
            <Route path ="/about" component={About} />
            <Route path ="/products" component={Demo} />
            <Route path ="/Blogs/8_effective_ways_to_do_social_media_marketing_for_restaurants" component={Blog1} />
            <Route path ="/Blogs/5_Reasons_You_Need_a_Digital_Menu_Board" component={Blog2} />
            <Route path ="/Blogs/Digital_menus_help_for_the_waiters" component={Blog3} />
            <Route path ="/Blogs/HumansofFC/Himanshu_khosla" component={Blog4} />
            <Route exact path="/Blogs/HumansofFC" component={HumansofFC} />
            <Footer />
        </div>
        
      </Router>
      
    );
  }
}

export default App;
