import React , { Component } from 'react';

export default class PageStart extends Component{
    render(){
        return(
            <div className="site-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-7">
                            <h1 className="page-title">
                                {this.props.title}
                            </h1>
                        </div>
                        {/* <div className="col-xs-5 text-right">
                            <p className="page-header-account-link">
                                
                                <a className="account-login" href="https://tastyigniter.com/member/login/">Customer Area</a>
                            </p>
                        </div> */}
                    </div>
                </div>          
            </div>
        );
    }
}