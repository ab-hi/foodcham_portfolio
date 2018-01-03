import React, { Component } from 'react';

import Header_slider from './home/head-slider';
import {head_style} from './home/head-slider'; 
import Home_features from './home/home-features';
import Partners from './home/partners';
import Clients from './home/clients';
import Testimonials from './home/testimonials';


export default class Home extends Component{
    render(){
        return(
            <div className= "App">
                <div style={head_style}>
                    <Header_slider />
                </div>
                <Home_features />
                <Partners />
                <Clients />
                <Testimonials />
            </div>
        )
    }
}
