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
                    <h5 className="font_family_a font_size_d font_color_a">FOODCHAM FEATURES</h5>
                    <p className="font_family_a font_size_b">Digital ordering softwares offered by foodcham <br/>provides avariety of features.</p>
                    <a href="products" className="product-button font_family_a font_size_b">See Products</a>
                </div>
            </section>
            <div id="product-section-a">
            
                 <div class="row">
                   <div class="small-12 columns text-center">
                     <ul class="list-inline product-menu">
                        <Feature onClick={(item) => this.scrollToElement("feature1")} title="Cloud" src={img1} />
                        <Feature onClick={(item) => this.scrollToElement("feature2")} title="Experience" src={img2} />
                        <Feature onClick={(item) => this.scrollToElement("feature3")} title="Digital" src={img3} />
                        <Feature onClick={(item) => this.scrollToElement("feature9")} title="Upselling" src={img8} />
                        <Feature onClick={(item) => this.scrollToElement("feature4")} title="Management" src={img4} />
                        <Feature onClick={(item) => this.scrollToElement("feature5")} title="Automated" src={img5} />
                        <Feature onClick={(item) => this.scrollToElement("feature6")} title="Analytics" src={img6} />
                        <Feature onClick={(item) => this.scrollToElement("feature7")} title="Updates" src={img7} />
                        <Feature onClick={(item) => this.scrollToElement("feature8")} title="Support" src={img8} />

                        
                     </ul>
                   </div>
                 </div>
           
            </div>
            <div id="product-box">
                <FeaturesPoints id="feature1" title="Cloud Based" icon={img1} src={featureImg1}>The Foodcham products are cloud based softwares providing an online interface for the restaurant operations.</FeaturesPoints>

                <FeaturesPoints2 id="feature2" title="Better user experience" icon={img2} src={featureImg2}>Digital ordering by Foodcham provides a better user experience for fine dining food ordering.</FeaturesPoints2>

                <FeaturesPoints id="feature3" title="Digital orders" icon={img1}  src={featureImg1}>Digital orders are easy to keep track of in a restaurant which also helps in the ordering operations in the restaurant.</FeaturesPoints>

                <FeaturesPoints2 id="feature9" title="Upselling of Orders" icon={img2} src={featureImg2}>Foodcham software provides an upselling of orders helping the restaurant present their personal preferences digitally</FeaturesPoints2>

                <FeaturesPoints id="feature4" title="Easy Management" icon={img2} src={featureImg2}>Foodcham provides an independent admin panel to the restaurant for easy management of orders and inventory remotely.</FeaturesPoints>

                <FeaturesPoints2 id="feature5" title="Automated ordering" icon={img1}  src={featureImg1}></FeaturesPoints2>

                <FeaturesPoints id="feature6" title="Overall Analytics" icon={img2} src={featureImg2}>Prepare dishes timely and in the right order thanks to the clear and highly intutive Table Management System</FeaturesPoints>

                <FeaturesPoints2 id="feature7" title="Runtime Updates" icon={img1} src={featureImg1}>Efficient service increasing the rotation of customers per table and lessening the waiting time</FeaturesPoints2>

                <FeaturesPoints id="feature8" title="24/7 Support" icon={img2} src={featureImg2}>Maintains user's database and history for easy accesing, management, references and suggestions</FeaturesPoints>
            </div>
        </div>

        )
    }
}