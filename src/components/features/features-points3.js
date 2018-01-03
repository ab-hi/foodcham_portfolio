import React, { Component } from 'react';

export default class FeaturesPoints3 extends Component{
    render(){
        return(
            <div className="margin-bottom-sm">
    <div className="container">
        <div className="col-sm-6">
            <img className="lazy-load" data-original={this.props.src} />
        </div>
        <div className="col-sm-6">
            <h2>{this.props.title}</h2>
            {this.props.children}
        </div>
    </div>
</div>
        );
    }
} 