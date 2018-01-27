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
            <li style={{cursor:"pointer"}} onClick={this.props.onClick}><a><span class="product-img"><img src={this.props.src} /></span><span class="text-uppercase font_family_a font_color_b product-name">{this.props.title}</span></a></li>
        )
    }
}

export default class FeaturesBody  extends Component{

    scrollToElement(item){
        let elem =document.getElementById(item);
        elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

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
                        <Feature onClick={(item) => this.scrollToElement("feature1")} title="Click" src={img1} />
                        <Feature onClick={(item) => this.scrollToElement("feature2")} title="Ace" src={img2} />
                        <Feature onClick={(item) => this.scrollToElement("feature3")} title="Tap" src={img3} />
                        <Feature onClick={(item) => this.scrollToElement("feature4")} title="Dine" src={img4} />
                        <Feature onClick={(item) => this.scrollToElement("feature5")} title="Merge" src={img5} />
                        <Feature onClick={(item) => this.scrollToElement("feature6")} title="Point" src={img6} />
                        <Feature onClick={(item) => this.scrollToElement("feature7")} title="Reach" src={img7} />
                        <Feature onClick={(item) => this.scrollToElement("feature8")} title="Loop" src={img8} />
                        
                     </ul>
                   </div>
                 </div>
           
            </div>
            <div id="product-box">
                <FeaturesPoints id="feature1" title="INTERACTIVE MENU" icon={img1} src={featureImg1}>Categorising various menu groups and items so that customers do not have to scroll through a long list of items </FeaturesPoints>

                <FeaturesPoints2 id="feature2" title="QUICK SEARCH" icon={img2} src={featureImg2}>Let your customers search for a specific item among differenr sub-menus </FeaturesPoints2>

                <FeaturesPoints id="feature3" title="FEEDBACK AND ANALYSIS" icon={img1}  src={featureImg1}>Never miss any important feedback, generate reports for accurate analysis and better understanding of cutomer behavior.</FeaturesPoints>

                <FeaturesPoints2 id="feature4" title="MAKE YOUR OWN STUFF" icon={img2} src={featureImg2}>Gamify the user experience of shopping and empower them to customise their food</FeaturesPoints2>

                <FeaturesPoints id="feature5" title="INTERNAL CUSTOMISAION" icon={img1}  src={featureImg1}>Enables customer to modify items with their tailored preferences</FeaturesPoints>

                <FeaturesPoints2 id="feature6" title="TIMELY AND CORRECT ORDERS" icon={img2} src={featureImg2}>Prepare dishes timely and in the right order thanks to the clear and highly intutive Table Management System</FeaturesPoints2>

                <FeaturesPoints id="feature7" title=" FAST AND AUTOMATED ORDERS" icon={img1} src={featureImg1}>Efficient service increasing the rotation of customers per table and lessening the waiting time</FeaturesPoints>

                <FeaturesPoints2 id="feature8" title="USER DATA" icon={img2} src={featureImg2}>Maintains user's database and history for easy accesing, management, references and suggestions</FeaturesPoints2>
            </div>
        </div>

        )
    }
}