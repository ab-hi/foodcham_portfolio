import React, { Component } from 'react'

export default class BlogDetail extends Component{

    constructor(props){
        super(props)

        this.state= this.props.location.state;
    }

    createMarkup() {
        return {__html: this.state.content};
      }
      
    MyComponent() {
        return <div dangerouslySetInnerHTML={this.createMarkup()} />;
      }

    render(){
        console.log(this.props.location.state)
        return(
            <div>
                
                    <div className="blog-header" style= {{backgroundImage: `url(${this.state.bg_img})`, backgroundSize:'cover'}} >
                    <div className="header-backdrop">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 col-md-offset-1 col-lg-10 col-lg-offset-1">
                                    <div className="blog-post-heading">
                                        <h1 className="animated bounceIn">{this.state.title}</h1>
                                        <span className="sub-heading">{this.state.brief}</span>
                                        <span className="meta">Posted on <span>{this.state.post_date}</span></span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="site-content">
                    <article className="post">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 col-md-offset-1 col-lg-10 col-lg-offset-1">
                                    <div className="post-content clearfix">
                                        {this.MyComponent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}