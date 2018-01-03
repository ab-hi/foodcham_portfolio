import React, { Component } from 'react';

import PageStart from '../PageStart';
import ServicesBody from './servicesbody';

export default class Services extends Component{
    render(){
        return(
            <div>
                <PageStart title="Services" /> 
                <section id="site-content">
          
                    <ServicesBody /> 
                    <div className="container">
                        <div className="cta cta-default border-sm-all margin-top-sm">
                            <div className="row">
                                <div className="col-sm-9 cta-text">
                                    <h4>Still looking for something?</h4>
                                    <h5>Contact the TastyIgniter Support for an answer to your question quick flash.</h5>
                                </div>
                                <div className="col-sm-3 cta-button border-sm-left text-center">
                                    <a className="btn btn-primary" href="contact.html">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}