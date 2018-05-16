import React, {Component} from 'react';

import blog_image from '../../assets/img/foodcham_bg.jpg';

export default class Blog4 extends Component{
    render(){
        return(
            <div>
                
                <div className="blog-header" style= {{backgroundImage : `url(${blog_image})`, backgroundSize : "100% 100%"}} >
                    <div className="header-backdrop">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 col-md-offset-1 col-lg-10 col-lg-offset-1">
                                    <div className="blog-post-heading">
                                        <h1 className="animated bounceIn">Himanshu Khosla</h1>
                                        <span className="sub-heading">Humans of Foodcham</span>
                                        <span className="meta">Posted on <span>May 16, 2018</span></span>
                                        
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
                                    <div>

                                        <p>
                                            <strong>
                                                Name
                                            </strong>
                                            
                                        </p>
                                        <p>
                                            Himanshu Khosla
                                        </p>
                                        <p>
                                            <strong>
                                                Question: When did you join Foodcham
                                            </strong>
                                            
                                        </p>
                                        <p>
                                            1 St June 2017
                                        </p>
                                        <p>
                                            <strong>
                                                Question: How did you associate with Foodcham
                                            </strong>
                                            
                                        </p>
                                        <p>
                                            How did you come to know about it?
                                        </p>
                                        <p>
                                            Through internshala and Sahu sir.
                                        </p>
                                        <p>
                                            <strong>
                                                Question: What do you think of Foodcham as an idea?
                                            </strong>
                                            
                                        </p>
                                        <p>
                                            The idea is pretty good as being a younger generation I do like doing things digitally with informative description and in a short period of time.
                                        </p>
                                        <p>
                                            <strong>
                                                Question: What made you join Foodcham?
                                            </strong>
                                            
                                        </p>
                                        <p>
                                            The strong and active technical team in terms of technology , guidance , hackathons.
                                        </p>
                                        <p>
                                            <strong>
                                                Question: How has your experience been so far?
                                            </strong>
                                            
                                        </p>
                                        <p>
                                            It has been a great experience in terms of my technical growth and friends and in terms of punctuality and dedication in the corporate experience.
                                        </p>
                                        <p>
                                            <strong>
                                                Question: In terms of knowledge and experience, how far have you learnt in the Startup ecosystem?
                                            </strong>
                                            
                                        </p>
                                        <p>
                                            I was a noobie with no experience in front end a year earlier and now I now all the major frameworks of js and nodejs , hosting with successful exposure to hackathons and startup culture.
                                        </p>
                                        <p>
                                            <strong>
                                                Question: Write about any of your memorable moment(s) in your Foodcham journey.
                                            </strong>
                                            
                                        </p>
                                        <p>
                                            During work or with the team or can be anything
                                        </p>
                                        <p>
                                            I loved technical discussion.
                                            <br />
                                            I loved going to hackathon with such experienced seniors.
                                            <br />
                                            I loved the team meeting and outings.
                                        </p>

                                      
                                    </div>
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