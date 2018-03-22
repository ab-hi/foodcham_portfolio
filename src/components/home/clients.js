import React, { Component } from 'react';

import client1 from '../../assets/img/fc-client-thc.jpg';
import client2 from '../../assets/img/fc-client-sb.png';
import client3 from '../../assets/img/fc-client-wbc.jpeg';
import client4 from '../../assets/img/foodcham-client-4.png';

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
                    <Client src={client1} className="img-responsive" />
                    <Client src={client2} className="img-responsive" />
                    <Client src={client3} className="img-responsive" />
                    <Client src={client4} className="img-responsive" />
                    
                </div>
            </div>
        )
    }
}