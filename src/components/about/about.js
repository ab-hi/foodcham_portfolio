import React from 'react';

import PageStart from '../PageStart';
import AboutBody from './aboutbody';

export default class About extends React.Component{
    render(){
        return(
            <div>
                <PageStart title="About" />
                <AboutBody />
            </div>
        );
    }
} 