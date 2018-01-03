import React from 'react';

import PageStart from '../PageStart';
import AboutBody from './aboutbody';
import ScrollToTop from '../scrollToTop'

export default class About extends React.Component{
    render(){
        return(
            <div>
                <ScrollToTop />
                <PageStart title="About" />
                <AboutBody />
            </div>
        );
    }
} 