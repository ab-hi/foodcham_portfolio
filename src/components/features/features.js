import React , { Component } from 'react';

import PageStart from '../PageStart.js';
import FeaturesBody from './feature-body.js';
import ScrollToTop from '../scrollToTop';


export default class Features extends Component{
    render(){
        return(
            <div>
                <ScrollToTop />
                <PageStart title="Features" />
                <FeaturesBody />
            </div>
        );
    }
}