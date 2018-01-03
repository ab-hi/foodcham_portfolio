import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class FeaturesPoints2 extends Component{
    render(){
        return(
            
            <div id="product-ace" className="limetray-products">
                <div className="row">                    
                    
                    <div className="col-xs-12 col-sm-6 col-md-6 columns text-left col-md-push-6">
                        <div className="product-desc">
                            <div style={{display: 'inline-block'}}>
                                <span className="left product-img-a img-responsive">
                                    <img src={this.props.icon} />
                                </span>
                                <p className="text-uppercase font_family_a font_size_d color-lime left product-name-a">
                                    {this.props.title}
                                </p>
                            </div>
                            <div>
                                <h2 className="font_family_a font_color_b font_size_d">{this.props.heading}</h2>
                                <p className="font_color_d font_size_b font_family_c">{this.props.children}</p>
                            </div>
                            <div className="product-desc-btn">
                                <Link to="/features" className="font_family_a font_size_a color-lime text-uppercase">Get Started</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6 columns text-left col-md-pull-6">
                        <img className="limetray-pro-img img-responsive" src={this.props.src} />
                    </div>
                    
                </div>
            </div>
        );
    }
} 