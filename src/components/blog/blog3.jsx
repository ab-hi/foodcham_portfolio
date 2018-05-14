import React, {Component} from 'react';

import ScrollToTop from '../scrollToTop';

import blog_image from '../../assets/img/blog_waiters.jpg';

export default class Blog1 extends Component{
    render(){
        return(
            <div>
                <ScrollToTop />
                <div className="blog-header" style= {{backgroundImage : `url(${blog_image})`, backgroundSize : "100% 100%"}} >
                    <div className="header-backdrop">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 col-md-offset-1 col-lg-10 col-lg-offset-1">
                                    <div className="blog-post-heading">
                                        <h1 className="animated bounceIn">Digital menus – help for the waiters</h1>
                                        <span className="sub-heading">No matter how tempting it may sound, the mere mention of digital menu to a waiter often causes an uneasy feeling that the increasing need for digital menus means less need for waiters. That could only be the case if tablets could listen, talk and give advice, and if they could serve the food. Since it is neither objective nor the purpose of digital menu, the waiters can be free to breathe, relax and take tablets in their hands.</span>
                                        <span className="meta">Posted on <span>April 30, 2018</span></span>
                                        
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
                                <div class="entry-content"><p>Although already popular in the world for some time, digital menus have just recently appeared on the Croatian market. <strong>They are designed as a tool to facilitate business caterers and guests to decide what to eat in a more interesting and more creative way.</strong> These digital format menus give you an entire restaurant’s offer through tablet application. Every food / drink is accompanied by a detailed description, image or even video content. The meals are classified in categories to allow easier access to restaurant’s offer and full navigation through the menu. Since people are visual creatures, attractive pictures often speak louder than words and present meals in the best possible light. A great option that digital menus have to offer is the possibility of introduction of detailed and interesting description of the dishes and adding your own recommendations. Guests are able to rate food and drink and leave their own comments for each dish, which is also a useful option because other guests can easily select foods based on their tastes and recommendations, not only from restaurant owners but also other guests who have already tried those dishes. Application allows you to enter menus in several languages, depending on desire and needs of caterers. That way, guests from foreign countries can overview the menu in their own language, which makes them <strong>feel welcomed and reduces the likelihood of misunderstandings.</strong></p>
<p>Besides just browsing the menu, guests have a possibility to order food themselves and later add up the food / drink in their order. <strong>This makes the ordering process much easier, faster, and more fun.</strong> It reduces the waiting time; there’s no unpleasant waving or turning around with the purpose of calling the waiter due to various queries. This results in more satisfied guests and waiters, who can devote more time to their clients and do not have to apologize for the long wait or misunderstanding during the ordering process.</p>

<p>No matter how tempting it may sound, the mere mention of digital menu to a waiter often causes an uneasy feeling that the increasing need for digital menus means less need for waiters. That could only be the case if tablets could listen, talk and give advice, and if they could serve the food. <strong>Since it is neither objective nor the purpose of digital menu, the waiters can be free to breathe, relax and take tablets in their hands.</strong></p>
<p>If we wonder what is the main goal of every caterer, the answer is simple – <strong>a full restaurant and a large table turnover.</strong> As we have written in several articles, which you can read in this blog, waiter’s courtesy is a very important factor, which significantly affects whether the guests come back to your restaurant. With the help of digital menu’s ordering options and option of calling the waiter, waiters can pay more attention to their guests. They don’t have to constantly walk around the restaurant looking who is calling for them. They don’t have to keep coming back to the same table to check whether the guests have decided what to order and if they want to add something to their order. They can focus on their work and quickly, efficiently serve the guests. There are no more wrong order complaints, long waits to make an order and anxious guests. Digital menus are a simple tool that allows better and faster communication between guests and waiters, serving more than one table at the same time, increased circulation of guests, introduction of menu changes on a daily basis if needed and boundless creativity in preparing the menus. <strong>It’s up to you to introduce the digital menu in your restaurant and taste the charm of the digital age.</strong></p>
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