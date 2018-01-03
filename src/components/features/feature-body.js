import React, { Component } from 'react';

// import "../../assets/css/main-css30f4.css";
// import "../../assets/css/foundation.css";
import  '../../assets/css/product.css';

import FeaturesPoints from './features-points';
import FeaturesPoints2 from './features-points2';
import FeaturesPoints3 from './features-points3';

import img1 from "../../assets/img/product/limetray-pro-click.png";
import img2 from "../../assets/img/product/limetray-pro-ace.png";
import img3 from "../../assets/img/product/limetray-pro-tap.png";
import img4 from "../../assets/img/product/limetray-pro-dine.png";
import img5 from "../../assets/img/product/limetray-pro-merge.png";
import img6 from "../../assets/img/product/limetray-pro-point.png";
import img7 from "../../assets/img/product/limetray-pro-reach.png";
import img8 from "../../assets/img/product/limetray-pro-drive.png";
import img9 from "../../assets/img/product/limetray-pro-feed.png";
import img10 from "../../assets/img/product/limetray-pro-line.png";
import img11 from "../../assets/img/product/limetray-pro-pulse.png";

import featureImg1  from "../../assets/img/product/limetray-click-img.jpg";
import featureImg2  from "../../assets/img/product/limetray-ace-img.jpg";


class Feature extends Component{
    render(){
        return(
            <li><a><span class="product-img"><img src={this.props.src} /></span><span class="text-uppercase font_family_a font_color_b product-name">{this.props.title}</span></a></li>
        )
    }
}

export default class FeaturesBody  extends Component{
    render(){
        return(
            <div>
                <section id="pro-top-banner-medium">
                
                <div className="top-banner-caption small-11">
                    <h5 className="font_family_a font_size_d font_color_a">THE LIMETRAY SUITE</h5>
                    <p className="font_family_a font_size_b">A complete solution for your restaurant’s<br />technology, operations & marketing needs.<br />All within an integrated framework.</p>
                    <a href="#product-click" className="product-button font_family_a font_size_b">See All Products</a>
                </div>
            </section>
            <div id="product-section-a">
            
                 <div class="row">
                   <div class="small-12 columns text-center">
                     <ul class="list-inline product-menu">
                        <Feature title="Click" src={img1} />
                        <Feature title="Ace" src={img2} />
                        <Feature title="Tap" src={img3} />
                        <Feature title="Dine" src={img4} />
                        <Feature title="Merge" src={img5} />
                        <Feature title="Point" src={img6} />
                        <Feature title="Reach" src={img7} />
                        <Feature title="Loop" src={img8} />
                        <Feature title="Drive" src={img9} />
                        <Feature title="Line" src={img10} />
                        <Feature title="Pulse" src={img11} />
                     </ul>
                   </div>
                 </div>
           
            </div>
            <div id="product-box">
                <FeaturesPoints title="CLICK" icon={img1} heading="Create a beautiful website for your restaurant" src={featureImg1}>Choose from an array of fully-customizable templates branded to your business. Fetch reviews from online platforms, integrate your social media channels and manage your content easily with complete backend access.</FeaturesPoints>

                <FeaturesPoints2 title="ACE" icon={img2} heading="Get your own online ordering portal" src={featureImg2}>Let your customers order directly from your website & app with fully customized & branded order online pages. Experience seamless order management with complete control over menu & offers, fully integrated with leading online payment portals.</FeaturesPoints2>
            </div>
        </div>

        )
    }
}