import React,  {Component} from 'react';

import PageStart from '../PageStart.js';
import ScrollToTop from '../scrollToTop';

import DemoBody from './demo-body';

export default class Demo extends Component{
    render(){
        return(
            <div>
                <ScrollToTop />
                <PageStart title="Demo" />
                <DemoBody />
            </div>
        );
    }
}