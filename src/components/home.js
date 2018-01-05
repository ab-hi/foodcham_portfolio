import React, { Component } from 'react';

import Header_slider from './home/head-slider';
import {head_style} from './home/head-slider'; 
import Home_features from './home/home-features';
import Partners from './home/partners';
import Clients from './home/clients';
import Testimonials from './home/testimonials';
import ScrollToTop from './scrollToTop';
import Parallax from './parallax';

import parallax_img1 from '../assets/img/limetray-hm-banner.jpg';
import parallax_img2 from '../assets/img/limetray-clientpage-slid-bk.jpg';


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
                <Testimonials />
            </div>
        )
    }
}
