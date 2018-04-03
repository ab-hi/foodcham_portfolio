import React from 'react';

import BlogContent from './blogcontent'
import BlogHeader from './blogheader'

import blog1_img from '../../assets/img/blog-test.jpg';

export default class Blog extends React.Component{
    render(){
        return(
            <div>
                <BlogHeader />

                <BlogContent post_title="How to Look Like THE Local Authority on Food" data_src="How to Look Like THE Local Authority on Food.jpg" src={blog1_img} pub_date="Nov 09, 2017" category="Restaurant Marketing" brief="We all want to be seen as an expert in what we do. It doesn’t matter what type of business you run, knowing that you are a go to place for advice, or for service, is a pretty great feeling.">
                                        {`<p>We all want to be seen as an expert in what we do. It doesn’t matter what      type of business you run, knowing that you are a go to place for advice, or for   service, is a pretty great feeling.</p>
                                        <p>When it comes to food, this is no different. As a restaurant, there is a good chance that you want to be the local authority on all things food. But the trouble is, where do you start? It is great to have all the knowledge, but you need to find a way to show others what you know.</p>
                                        <p>We are here to help and we have put together some of the best ways that you can look like the local authority on food. </p>
                                        <h4>Create a strong brand that shouts professionalism</h4>
                                        <p>Now, this one may sound strange, but in order to be seen as a professional, you need to look like a professional business. No-one is going to see you as a go to place if you don’t look like the kind of place that people what to go to. This runs deeper then just your premises, you need to make sure that everything about you as a whole shouts out professionalism. Your brand, your website, your social media. All of these things need to paint you in the light of a business who knows what they are talking about. </p>
                                        <h4>Tell people why you know what you are talking about</h4>
                                        <p>It might seem like a bit of a brag, but if you know what you are talking about when it comes to your business, then you need to tell other people this. One great way to do this is to have an about us page on your website. This can dive in to not only the type of restaurant you are, but also your background and experience too.</p>
                                        <h4>Run workshops</h4>
                                        <p>People are much more likely to see you as an expert if you can showcase to them what you know. There are plenty of restaurants out there that have cooking workshops alongside their usual type of business. Whilst these are not designed to give away any secrets, they are a great opportunity to give your customers a chance to see that you know exactly what you are doing and that you are confident enough to teach others.</p>
                                        <h4>Get out there</h4>
                                        <p>It can be tempting sometimes to settle for simply spending your time running a restaurant and providing great food. Whilst this is the main aim of any restaurant, you should also remember that you can be more than that. There is a good chance that there will be plenty of local events that you can attend. Perhaps running a stall or providing the catering. These are great ways to not only show what you can offer, but also get yourself seen as a part of the community too. </p>
                                        <p>As you can see there are a number of ways that you can make sure that you are the go to place. All you  need to do now is make sure that you have the food and service to match all those things that you say you can do!</p>`}
                </BlogContent>

                <BlogContent post_title="Essential Components on Your Restaurant Website" data_src="Essential Components on Your Restaurant Website.jpg" src={blog1_img} pub_date="Nov 02, 2017" category="RTastyIgniter Tips" brief="Any business knows that to get ahead in this modern world, you need to have a website. For restaurants, their website is there to entice people to come and eat with them.">
                    
                </BlogContent>

                <BlogContent post_title="Identifying Who Your Target Market Is" data_src="Identifying Who Your Target Market Is.jpg" src="storage/app/uploads/public/59d/f64/3ba/59df643baf7d6517586961.jpg" pub_date="Nov 01, 2017" category="Increasing Sales" brief=" No matter how much effort you put into marketing your restaurant, if you don’t know who you are marketing to then you are likely to fail.">
                </BlogContent>
                
                <BlogContent post_title="Restaurant Marketing: How to Gain Media Attention and Keep it" data_src="Restaurant Marketing How to Gain Media Attention and Keep it.jpg" src="storage/app/uploads/public/59d/f61/ba8/59df61ba88364518041285.jpg" pub_date="Oct 19, 2017" category="Restaurant Marketing" brief="There are a variety of ways that local restaurants can try to promote themselves and their menus. Social media, promotions, events and of course, the good old fashioned word of mouth.">
                
                </BlogContent>

                <BlogContent post_title="Restaurant Management: Why You Should Be Running Customer Surveys" data_src="Restaurant Management Why You Should Be Running Customer Surveys.jpg" src="storage/app/uploads/public/59d/f60/aaa/59df60aaabb45129908544.jpg" pub_date="Oct 12, 2017" category="Restaurant Management" brief="In order for a restaurant to keep on trading, they need to make sure that they have left their customers feeling satisfied. Not only will this mean that those customers come back for more, but also that they then recommend the restaurant to their friends, who in turn will eat there.">
                
                </BlogContent>
            </div>
        );
    }
}