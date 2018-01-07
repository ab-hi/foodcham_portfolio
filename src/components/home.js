import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import Header_slider from './home/head-slider';
import {head_style} from './home/head-slider'; 
import Home_features from './home/home-features';
import Partners from './home/partners';
import Clients from './home/clients';
import Testimonials from './home/testimonials';
import ScrollToTop from './scrollToTop';
import Parallax from './parallax';

import parallax_img1 from '../assets/img/fctablet.jpg';
import parallax_img2 from '../assets/img/foodchamteam.jpg';


export default class Home extends Component{
    render(){
        return(
            <div className= "App">
                <ScrollToTop />
                <div style={head_style}>
                    <Header_slider />
                </div>
                <Parallax img = {parallax_img1} />
                <Home_features />
                <Parallax img = {parallax_img2} />

                <Partners />
                <Clients />
                <div className="home-cfa margin-top-sm">
                    <Testimonials />
                </div>

                <div className="container">
                    <div className="cta cta-default border-all margin-top-sm">
                        <div className="row">
                            <div className="col-sm-9 cta-text margin-top-xs">
                                <h4>We’re serving up some pretty tasty features</h4>
                            </div>
                            <div className="col-sm-3 cta-button border-sm-left text-center">
                                <Link className="btn btn-orange btn-lg" to="/services"><span>See Our Services</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
