import React , { Component } from 'react';

export default class ServicesFeatures2 extends Component{
    render(){
        return(
            <div className="col-sm-4 wrap-bottom-sm border-sm-left">
                <h2><i className={"fa " + this.props.icon}></i> {this.props.title} </h2>
                <p>
                    {this.props.children}
                </p>
                <a className="btn btn-default margin-top-xs" href="contact.html">Contact Us to find out more</a>
            </div>
        )
    }
}