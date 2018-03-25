import React,  { Component } from 'react';

import {Link} from 'react-router-dom';

import img from "../../assets/images/Home-mockup.png";

export const head_style={
    background : "radial-gradient(circle farthest-side at right bottom, #E7B02F 5%,#e98c26 25%,#eb681e 80%,#ed561a 100%)"
}

export default class Header_slider extends Component{
    render(){
        return(
          <div>  
<div className="home-slider">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-5">
                <div className="slide-text animated fadeInDown">
                    <h1 className="slide-title">Meet FoodCham</h1>
                    <p>User friendly and easy to use, digital ordering system for restaurants and the visitors in the restaurant.</p>
                    <p className="button-group">
                        <Link className="btn btn-default animated wobble" to="/features">See more features</Link>
                    </p>
                </div>
            </div>
            <div className="col-xs-8 col-sm-6 col-sm-offset-1 m-top-5">
                <div className="animated lightSpeedIn">
                    <img src={img} />
                </div>
            </div>
        </div>
    </div>
</div>

<div className="home-slider-cta">
    <div className="container text-center">
        <ul className="social-icons">
            <li className="title hidden-xs">Follow us on:</li>
            <li><a className="facebook" href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
            <li><a className="linkedin" href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            <li><a className="youtube" href="#" target="_blank"><i className="fa fa-youtube"></i></a></li>
            <li><a className="pinterest" href="#" target="_blank"><i className="fa fa-pinterest"></i></a></li>
        </ul>
    </div>
</div>

</div>
        )
    }
}