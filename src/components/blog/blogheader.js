import React from 'react';


export default class BlogHeader extends React.Component{
    render(){
        return(
            <div>
                <header id="site-header">
                    <div className="blog-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 col-md-offset-1 col-lg-10 col-lg-offset-1">
                                    <div className="blog-heading text-center">
                                        <h2 className="animated bounceIn">{this.props.heading}</h2>
                                        <hr className="small" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}