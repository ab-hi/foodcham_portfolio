import React , { Component } from 'react';

import PageStart from '../PageStart.js';
import FeaturesBody from './feature-body.js';

export default class Features extends Component{
    render(){
        return(
            <div>
                <PageStart title="Features" />
                <FeaturesBody />
            </div>
        );
    }
}