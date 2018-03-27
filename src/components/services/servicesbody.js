import React, { Component } from 'react';

import ServicesFeatures from './servicesfeatures';
import ServicesFeatures2 from './servicesfeatures2';

export default class ServicesBody extends Component{
    render(){
        return(
            <div>
                 <div className="container margin-bottom-sm">
                    <h2 className="page-title">Simple and Inexpensive.</h2>

                    <p>
                        Foodcham is a cost efficient solution for restaurants to enhance their customer experience.
                    </p>
                    <p>If you do need a little help however, we have a range of affordable services.</p>

                    {/* <div className="row margin-bottom-sm">
                        <div className="col-sm-8 wrap-bottom-sm">
                            <h3>Installation</h3>
                            <p>We can install TastyIgniter for you – ready to go within a matter of hours.</p>
                            <a className="text-primary" href="member/register/installation-service/index.html"><b>£19.99 - Buy Now&nbsp;&nbsp;<i className="fa fa-angle-right"></i></b></a>

                            <h3>Upgrade</h3>
                            <p>Priced from £34.99 our upgrade service can upgrade any version of TastyIgniter to the most current release.</p>
                            <a className="text-primary" href="member/register/upgrade-service/index.html"><b>£34.99 – Buy Now&nbsp;&nbsp;<i className="fa fa-angle-right"></i></b></a>
                        </div>
                        <div className="col-sm-4">
                            <div className="bg-view-demo text-center">
                                <div className="button">
                                    <a className="btn btn-primary btn-lg" href="demo.html"> View Demo </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>

                <div className="border-horizontal text-center">
                    <div className="container">
                        <div className="row flex-container">
                            <ServicesFeatures title="WE TAKE CARE OF THE TECHNICAL BITS" icon ="fa-wrench">
                                We handle all upgrades and maintenance
                            </ServicesFeatures>
                            <ServicesFeatures title="AFFORDABLE FOR ANY BUSINESS" icon ="fa-dollar">
                                Choose the plan to suit your business
                            </ServicesFeatures>
                            <ServicesFeatures title="FAST SUPPORT FROM EXPERT" icon ="fa-support">
                                Talk to engineers, not sales people.
                            </ServicesFeatures> 
                        </div>
                    </div>
                </div>

                <div className="bg-light-orange wrap-top-lg wrap-bottom-sm">
                    <div className="container price-list-container">
                        <div className="col-sm-10 center-block">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 wrap-none hidden-xs text-center">
                                    <div className="panel panel-default panel-price">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Digital Ordering Software</h3>
                                            <p className="price">
                                                <span>₹ 999</span>
                                                <sub>/mo.</sub>
                                            </p>
                                        </div>
                                        <ul className="list-group">
                                            <li className="list-group-item"><b>Increased</b> User Experience</li>
                                            <li className="list-group-item">Waiter <b>Independancy</b></li>
                                            <li className="list-group-item"><b>Upselling</b> of Orders</li>
                                            <li className="list-group-item">Detailed <b>Order Reports</b></li>
                                            <li className="list-group-item">Easy <b>Order Management</b></li>
                                            <li className="list-group-item"><b>Integrated Feedback </b>system</li>
                                            <li className="list-group-item">Social Media <b>Marketing</b></li>
                                            <li className="list-group-item">Administration <b>Dashboard</b></li>
                                        </ul>
                                        <a href="download.html" className="btn btn-primary wrap-vertical-lg">Subscribe</a>
                                    </div>
                                </div>
                                
                                <div className="col-xs-12 col-sm-6 wrap-none text-center">
                                    <div className="panel panel-default panel-price">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Waiter Ordering Software</h3>
                                            <p className="price">
                                                <span>₹ 799</span>
                                                <sub>/mo.</sub>
                                            </p>
                                        </div>
                                        <ul className="list-group">
                                            <li className="list-group-item">Tablet Ordering</li>
                                            <li className="list-group-item">No <b>Waiter Pads</b></li>
                                            <li className="list-group-item"><b>Cloud</b> Menu</li>
                                            <li className="list-group-item">Faster <b>Orders</b></li>
                                            <li className="list-group-item">Software <b>Upgrades</b></li>
                                            <li className="list-group-item">Easy <b>Order Management</b></li>
                                            <li className="list-group-item">Social Media <b>Marketing</b></li>
                                            <li className="list-group-item">Administration <b>Dashboard</b></li>
                                        </ul>
                                        <a href="member/register/monthly-hosting-solution/index.html" className="btn btn-primary wrap-vertical-lg">Subscribe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="border-sm-horizontal margin-bottom-xs">
                    <div className="container">
                        <div className="row flex-container">
                            <ServicesFeatures2 title="Bring your idea to life" icon = "fa-code">
                                If you have an innovative idea for a new TastyIgniter module then our sponsored development service (complete with special development rate of £50 per hour) can bring it to life and implement it prior to the next release.
                            </ServicesFeatures2>
                            <ServicesFeatures2 title="Custom development" icon = "fa-code">
                            We offer custom development of features – putting the power of the TastyIgniter platform in your hands.
                                    For £75 per hour we’ll build a plugin to your exact needs.<br/><br/>
                            </ServicesFeatures2>
                            <ServicesFeatures2 title="Remove our brand" icon = "fa-magic">
                            Allow your customers to focus upon your brand alone by choosing this add-on to strip out our “Powered By”
                            text that appears within our template scripts.<br/><br/>
                            </ServicesFeatures2>
                        </div>
                    </div>
                </div> */}


            </div>
        );
    }
}