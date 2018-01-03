import React ,{ Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
                <footer id="site-footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row wrap-horizontal">
                                <div className="col-sm-6 newsletter-subscribe">
                                    <i className="fa fa-envelope fa-3x pull-left"></i>
                                    <h2 className="subscribe-title">Subscribe to our mailing list</h2> 
                                    Stay informed of FoodCham news and updates
                                    <form id="subscribe-form" className="subscribe-form" data-request="spMailchimp::onSignup" data-request-update="'spMailchimp::result': '#subscribe-form-error'">
                                        <div className="input-group">
                                            <input name="email" value="" type="email" placeholder="Enter e-mail address" className="form-control" required="required" />
                                            <div className="input-group-btn">
                                                <button type="submit" className="gtm-newsletter-subscribe btn btn-default">Submit</button>
                                            </div>
                                        </div>
                                        <div id="subscribe-form-error" className="wrap-top-xs"></div>
                                    </form>
                                </div>

                                <div className="col-sm-4 pull-right text-right hidden-xs">
                                    <div className="footer-contact">
                                        <h4>Still Have Questions?</h4>
                                        <Link className="btn btn-primary btn-wire btn-lg" to="/contact">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="social-icons">
                                        <li>
                                            <a href="#" title="Follow us on Facebook" className="facebook" target="_blank"><i className="social_icon fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" title="Follow us on Twitter" className="twitter" target="_blank"><i className="social_icon fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" title="Follow us on Youtube" className="youtube" target="_blank"><i className="social_icon fa fa-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" title="Follow us on LinkedIn" className="linkedin" target="_blank"><i className="social_icon fa fa-linkedin"></i></a>
                                        </li>

                                    </div>
                                    <ul className="footer-links">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/licence">Licence</Link></li>
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link to="/legal-notice">Legal Notice</Link></li>
                                    </ul>
                                </div>
                                <div className="copyright col-sm-6 text-right">
                                    © Copyright FoodCham 2016. All Rights Reserved<br />
                                </div>
                            </div>
                            <div className="scroll-to-top"><i className="fa fa-angle-up"></i></div>
                        </div>            
                    </div>

                </footer>

        );
    }
}