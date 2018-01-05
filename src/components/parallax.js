import React, { Component } from 'react';

export default class Parallax extends Component{
    render(){
        return(
            <div className="row">
                <div className="parallax cta-default margin-top-sm" style={{backgroundImage: `url(${this.props.img})`}}>
                </div>
            </div>
        )
    }
}