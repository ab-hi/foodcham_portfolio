import React, { Component} from 'react';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import ModalBox from './modal';

import Footer from './footer';
import Features from './features/features';
import App from '../App';
import Services from './services/services';
import Blog from './blog/blog';
import About from './about/about';

import logo from '../assets/img/foodcham_banner-01.png';

export default  class Navbar extends Component{

  
    render(){        
        return(
                <div id="site-header">
                    <nav id="site-nav" className="navbar navbar-default" role="navigation">
                        <div className="container">
                            <div className="row">
                                <div className="navbar-header col-xs-12 col-sm-3">
                                    <NavLink className="navbar-brand" to="/">
                                        <img src={logo} alt="Foodcham" className="img-responsive" />
                                    </NavLink>
                                    <button type="button" className="btn navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse navbar-main-collapse col-xs-12 col-sm-8 pull-right">
                                    <ul className="nav navbar-nav">
                                        <li className=""><NavLink to="/">Home</NavLink></li>
                                        <li className=""><NavLink to="/about">About</NavLink></li>
                                        <li className=""><NavLink to="/products">Products</NavLink></li>

                                        <li className=""><NavLink to="/features">Features</NavLink></li>
                                        <li className=""><NavLink to="/services">Services</NavLink></li>
                                    
                                        <li className=""><NavLink to="/blog">Blog</NavLink></li>
                                        <li className="footer-contact"> <ModalBox /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
            

            </div>






        );
    }
}