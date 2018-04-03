import React, { Component } from 'react';

import logo_1 from "../../assets/img/foodcham-tie-up-ambrane.jpg";
import logo_2 from "../../assets/img/foodcham-tie-up-sparktech.jpg";

class Partner extends Component{

    render(){
        return(
            <li className={this.props.otherClass ? `${this.props.otherClass}`: ""}><img src={this.props.src} className="img-responsive"/></li>
        );
    }
}

export default class Partners extends Component{
    render(){
        return(
            <div>
                <div className="home-cfa margin-top-sm"> 
                    <h4 className="font_color_d font_size_b">Easy integrations with our partners</h4>
                    <ul className="list-inline margin-top-sm">
                        <Partner src={logo_1} otherClass="margin-right-lg"/>
                        <Partner src={logo_2} />
                    </ul>
                </div>
            </div>
        );
    }
}