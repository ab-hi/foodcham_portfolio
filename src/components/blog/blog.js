import React from 'react';

import BlogContent from './blogcontent'
import BlogHeader from './blogheader'

import blog1_img from '../../assets/img/restaurant_marketing.png';
import blog2_img from '../../assets/img/5reasons.png';
import blog3_img from '../../assets/img/blog_waiters.jpg';

export default class Blog extends React.Component{
    render(){
        return(
            <div>
                <BlogHeader heading="Restaurant news, articles and information."/>

                <BlogContent post_title="Humans of Foodcham"  src={blog3_img} pub_date="May 16, 2018" category="Meeting the people" brief="" link="/Blogs/HumansofFC">
                </BlogContent>   

                <BlogContent post_title="8 effective ways to do social media marketing for restaurants" src={blog1_img} pub_date="April 28, 2018" category="Restaurant Marketing" brief="MARKETING is a tough yet a must-know concept to manage any business these days. And when it comes to the restaurant business, you cannot afford to sit back and watch the show." link ="/Blogs/8_effective_ways_to_do_social_media_marketing_for_restaurants">
                </BlogContent>

                <BlogContent post_title="5 Reasons You Need a Digital Menu Board"  src={blog2_img} pub_date="April 29, 2018" category="FoodCham Tips" brief="Are you spending too much money updating your menus or printing posters about promotions you’re running? Maybe it’s been years since you even considered making a change to your menus. Are you struggling to retain customers and attract a new audience?" link="/Blogs/5_Reasons_You_Need_a_Digital_Menu_Board">
                </BlogContent>
                <BlogContent post_title="Digital menus – help for the waiters"  src={blog3_img} pub_date="April 30, 2018" category="Restaurant Management" brief="No matter how tempting it may sound, the mere mention of digital menu to a waiter often causes an uneasy feeling that the increasing need for digital menus means less need for waiters. That could only be the case if tablets could listen, talk and give advice, and if they could serve the food. Since it is neither objective nor the purpose of digital menu, the waiters can be free to breathe, relax and take tablets in their hands." link="/Blogs/Digital_menus_help_for_the_waiters">
                </BlogContent>                    
            </div>
        );
    }
}