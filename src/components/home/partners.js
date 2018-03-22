import React, { Component } from 'react';

import logo_1 from "../../assets/img/foodcham-tie-up-ambrane.jpg";
import logo_2 from "../../assets/img/foodcham-tie-up-sparktech.jpg";
import logo_3 from "../../assets/img/limetray-partners-swiggy.png";

class Partner extends Component{
    render(){
        return(
            <li><img src={this.props.src} className="img-responsive" /></li>
        );
    }
}

export default class Partners extends Component{
    render(){
        return(
            <div className="row">
                <div className="home-cfa margin-top-sm"> 
                    <h4 className="font_color_d font_size_b">Easy integrations with our partners</h4>
                    <ul className="list-inline">
                        <Partner src={logo_1} />
                        <Partner src={logo_2} />
                        <Partner src={logo_3} />
                    </ul>
                </div>
            </div>
        );
    }
}