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

    constructor(props){
        super(props)

        this.state={
            open:false,
            menuOpen : 'collapse'
        }

        this.onOpenModal= this.onOpenModal.bind(this);
    }

    toggleNavBar = () => {
        this.setState({
            menuOpen: this.state.menuOpen == ''?'collapse':''
        })
    }
   
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () =>{
        this.setState({open:false});
    }
  
    render(){        
        return(
                <div id="site-header">
                    <nav id="site-nav" className="navbar navbar-default" role="navigation">
                        <div className="container">
                            <div className="row">
                                <div className="navbar-header col-xs-12 col-sm-3">
                                    <NavLink className="navbar-brand" to="/" onClick={this.toggleNavBar}>
                                        <img src={logo} alt="Foodcham" className="img-responsive" />
                                    </NavLink>
                                    <button type="button" className="btn navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse" onClick={this.toggleNavBar}>
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className={`navbar-collapse navbar-main-collapse col-xs-12 col-sm-8 pull-right ${this.state.menuOpen}`}>
                                    <ul className="nav navbar-nav">
                                        <li className=""><NavLink to="/"  onClick={this.toggleNavBar}>Home</NavLink></li>
                                        <li className=""><NavLink to="/about"  onClick={this.toggleNavBar}>About</NavLink></li>
                                        <li className=""><NavLink to="/products"  onClick={this.toggleNavBar}>Products</NavLink></li>

                                        <li className=""><NavLink to="/features"  onClick={this.toggleNavBar}>Features</NavLink></li>
                                        <li className=""><NavLink to="/services"  onClick={this.toggleNavBar}>Services</NavLink></li>
                                    
                                        <li className=""><NavLink to="/blog"  onClick={this.toggleNavBar}>Blog</NavLink></li>
                                        <li className="footer-contact"> <div onClick={this.onOpenModal} style={{color:'white'}} className="btn-download btn-lg btn btn-primary btn-wire">Join Us</div></li>
                                        <ModalBox onClose={this.onCloseModal} open={this.state.open}/> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
            

            </div>






        );
    }
}