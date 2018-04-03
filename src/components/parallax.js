import React, { Component } from 'react';

export default class Parallax extends Component{
    render(){
        return(
            <div>
                <div className="parallax cta-default margin-top-sm" style={{backgroundImage: `url(${this.props.img})`}}>
                   <p className="parallax-text col-sm-4"> {this.props.children} </p>
                </div>
            </div>
        )
    }
}