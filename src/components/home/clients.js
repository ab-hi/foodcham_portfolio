import React, { Component } from 'react';

import client1 from '../../assets/img/fc-client-thc.jpg';
import client2 from '../../assets/img/fc-client-sb.png';
import client3 from '../../assets/img/fc-client-wbc.jpeg';

class Client extends Component{
    render(){
        return(
            <div className={this.props.classes}>
                <img src={this.props.src} className="img-responsive" style={{width:'100%'}} />
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
                    <Client src={client2} classes="col-sm-2 col-sm-offset-1" />
                    <Client src={client3} classes="col-sm-3 col-sm-offset-1" />
                    <Client src={client1} classes="col-sm-2 col-sm-offset-2"/>                    
                </div>
            </div>
        )
    }
}