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
import timeline from '../assets/img/timeline-01.png';


export default class Home extends Component{
    render(){
        return(
            <div className= "App">
                <ScrollToTop />
                <div style={head_style}>
                    <Header_slider />
                </div>
                <Parallax img = {parallax_img1} >
                Foodcham digital menu offers complete package of features allowing restaurants to operate more efficiently and bring a new interactive experience for staff and customers alike. In addition, the features will allow restaurants to change menu according to the changing requirements.

                </Parallax>
                <Home_features />
                <div className="row cta">
                    <div className="col-sm-8 col-sm-offset-2">
                        <img src={timeline} className="img-responsive" />
                    </div>
                </div>
                <Partners />
                {/*<Clients />*/}
                <div className="home-cfa margin-top-sm">
                <h3>What people say about us</h3>

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
