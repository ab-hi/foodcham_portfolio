import React from 'react';

import BlogContent from './blogcontent'
import BlogHeader from './blogheader'

export default class Blog extends React.Component{
    render(){
        return(
            <div>
                <BlogHeader />

                <BlogContent post_title="How to Look Like THE Local Authority on Food" data_src="How to Look Like THE Local Authority on Food.jpg" src="../../assets/uploads/public/59d/f64/c7d/59df64c7d4cfc289033637.jpg" pub_date="Nov 09, 2017" category="Restaurant Marketing">
                    We all want to be seen as an expert in what we do. It doesn’t matter what type of business you run, knowing that you are a go to place for advice, or for service, is a pretty great feeling.
                </BlogContent>

                <BlogContent post_title="Essential Components on Your Restaurant Website" data_src="Essential Components on Your Restaurant Website.jpg" src="storage/app/uploads/public/59d/f63/3c7/59df633c7367c820941441.jpg" pub_date="Nov 02, 2017" category="RTastyIgniter Tips">
                Any business knows that to get ahead in this modern world, you need to have a website. For restaurants, their website is there to entice people to come and eat with them.
                </BlogContent>

                <BlogContent post_title="Identifying Who Your Target Market Is" data_src="Identifying Who Your Target Market Is.jpg" src="storage/app/uploads/public/59d/f64/3ba/59df643baf7d6517586961.jpg" pub_date="Nov 01, 2017" category="Increasing Sales">
                No matter how much effort you put into marketing your restaurant, if you don’t know who you are marketing to then you are likely to fail.
                </BlogContent>
                
                <BlogContent post_title="Restaurant Marketing: How to Gain Media Attention and Keep it" data_src="Restaurant Marketing How to Gain Media Attention and Keep it.jpg" src="storage/app/uploads/public/59d/f61/ba8/59df61ba88364518041285.jpg" pub_date="Oct 19, 2017" category="Restaurant Marketing">
                There are a variety of ways that local restaurants can try to promote themselves and their menus. Social media, promotions, events and of course, the good old fashioned word of mouth.
                </BlogContent>

                <BlogContent post_title="Restaurant Management: Why You Should Be Running Customer Surveys" data_src="Restaurant Management Why You Should Be Running Customer Surveys.jpg" src="storage/app/uploads/public/59d/f60/aaa/59df60aaabb45129908544.jpg" pub_date="Oct 12, 2017" category="Restaurant Management">
                In order for a restaurant to keep on trading, they need to make sure that they have left their customers feeling satisfied. Not only will this mean that those customers come back for more, but also that they then recommend the restaurant to their friends, who in turn will eat there.
                </BlogContent>
            </div>
        );
    }
}