import React from 'react';


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
                                                    <a href="blog/2017/11/how-look-local-authority-food.html">
                                                    <img data-src={this.props.data_src}
                                                        src={this.props.src} alt=""                                    style={{maxWidth : '100%'}}
                                                    />
                                                    </a>
                                                </div>
                                            </div>
                        
                                            <div className="col-sm-8">
                                                <div className="post-preview">
                                                    <a href="blog/2017/11/how-look-local-authority-food.html">
                                                        <h2 className="post-title">
                                                            {this.props.post_title}
                                                        </h2>
                                                        <h3 className="post-excerpt">{this.props.children}</h3>
                                                    </a>
                                                    <p className="post-meta">
                                                        Posted
                                                        in                                                           <a href="about.html">{this.props.category}</a>,                                                                                                                                              on {this.props.pub_date}
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