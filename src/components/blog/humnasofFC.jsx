import React from 'react';

import BlogContent from './blogcontent';
import BlogHeader from './blogheader';
import blog3_img from '../../assets/img/team/himanshu_khosla.jpeg';



export default class HumansofFC extends React.Component{
    render(){
        return(
            <div>
                <BlogHeader  heading="Humans of FoodCham"/>

                <BlogContent post_title="Himanshu Khosla"  src={blog3_img} pub_date="May 16, 2018" category="Humans of FC" brief="" link="/Blogs/HumansofFC/Himanshu_khosla">
                </BlogContent>   

            </div>
        );
    }
}