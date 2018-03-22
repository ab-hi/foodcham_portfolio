import React, {Component} from 'react';

import img1 from '../../assets/uploads/2015/06/tastyigniter-storefront-demo.jpg'
import img2 from '../../assets/uploads/2015/06/tastyigniter-admin-demo.jpg'

export default class DemoBody extends Component{
    render(){
        return(
            <section id="site-content">
           

                <div className="margin-horizontal-sm border-horizontal text-center">
                    <div className="container">
                        <div className="row flex-container">
                            <div className="col-sm-6 border-left wrap-horizontal">
                                <h3>Digital Ordering Software</h3>
                                <div className="col-sm-10 center-block wrap-top-xs">
                                    <img className="img-circle" src={img1} />
                                </div>
                                <div className="clearfix"></div>
                                <br/><br/>
                                <a className="btn btn-default btn-lg wrap-vertical-lg" href="#" target="_blank" rel="">Digital Ordering Software</a>
                                <ul className="list-unstyled" style={{marginTop: '2em'}}>
                                    <li>Enhanced user experience</li>
                                    <li>Technical user ordering</li>
                                    <li>Online updation of menu</li>
                                    <li>Easy inventory management</li>

                                </ul>
                            </div>
                            <div className="col-sm-6 border-left border-right wrap-horizontal">
                                <h3>Waiter Ordering Software</h3>
                                <div className="col-sm-10 center-block wrap-top-xs">
                                    <img className="img-circle" src={img2} />
                                </div>
                                <div className="clearfix"></div>
                                <br/><br/>
                                <a className="btn btn-primary btn-lg wrap-vertical-lg" href="#" target="_blank" rel="">Waiter Ordering Software</a>
                                <ul className="list-unstyled" style={{marginTop: '2em'}}>
                                <li>Digital ordering interface</li>
                                <li>Faster ordering service</li>
                                <li>Automated ordering</li>
                                <li>Easy to use</li>

                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>


        </section>
        )
    }
}