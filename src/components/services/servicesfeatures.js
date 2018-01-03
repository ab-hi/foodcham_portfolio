import React , { Component } from 'react';

export default class ServicesFeatures extends Component{
    render(){
        return(
            <div className="col-sm-4 border-sm-left border-xs-bottom wrap-xs-horizontal">
                <h5 className="no-margin-bottom">
                    <i className={"fa fa-2x " + this.props.icon} ></i><br /><br />
                        {this.props.title}
                </h5>
                <p><small>{this.props.children}</small></p>
            </div>
        )
    }
}