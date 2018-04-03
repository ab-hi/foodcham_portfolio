import React from 'react';

import {Link} from 'react-router-dom';

export default class BlogContent extends React.Component{
    render(){
        return(
            <div>                
                <section id="site-content">
                    <div className="container margin-top-sm">
                        <div className="row">
                            <div className="col-md-11 col-md-offset-1 col-lg-10 col-lg-offset-1">        
                                 <div className="post-list">
                                     <div className="post">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="post-image">
                                                    <Link to={{ pathname: `/BlogDetail/${this.props.post_title}`, state: { title: this.props.post_title, post_date: this.props.pub_date, brief: this.props.brief, content: this.props.children, bg_img: this.props.src} }}>
                                                    <img data-src={this.props.data_src}
                                                        src={this.props.src} alt=""                                    style={{maxWidth : '100%'}}
                                                    />
                                                    </Link>
                                                </div>
                                            </div>
                        
                                            <div className="col-sm-8">
                                                <div className="post-preview">
                                                    <Link to={{ pathname: `/BlogDetail/${this.props.post_title}`, state: { title: this.props.post_title, post_date: this.props.pub_date, brief: this.props.brief, content: this.props.children, bg_img: this.props.src} }}>
                                                        <h2 className="post-title">
                                                            {this.props.post_title}
                                                        </h2>
                                                        <h3 className="post-excerpt">{this.props.brief}</h3>
                                                    </Link>
                                                    <p className="post-meta">
                                                        Posted
                                                        in &nbsp;                                                           
                                                        <a href="about.html">{this.props.category}</a>,                                                                        
                                                        on   &nbsp;
                                                         {this.props.pub_date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}