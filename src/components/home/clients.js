import React, { Component } from 'react';

class Client extends Component{
    render(){
        return(
            <div className="col-sm-3">
                <img src={this.props.src} className="img-responsive" />
            </div>
        )
    }
}

export default class Clients extends Component{
    render(){
        return(
            <div className="cta-default border-all margin-top-sm">
                <div className="row">
                    <h4>Our Top Clients</h4>
                    <Client src="img/burger-king-limetray.png" className="img-responsive" />
                    <Client src="img/burger-king-limetray.png" className="img-responsive" />
                    <Client src="img/burger-king-limetray.png" className="img-responsive" />
                    <Client src="img/burger-king-limetray.png" className="img-responsive" />
                </div>
            </div>
        )
    }
}