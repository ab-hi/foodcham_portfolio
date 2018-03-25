import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../assets/img/c.jpg';
import img2 from '../../assets/img/a.jpg';
import img3 from '../../assets/img/b.jpg';



export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div>
                        <img src={img1} className="img-responsive"/>
                        <div className="col-md-6 col-md-offset-3">
                            <p>It feels great to tie up with FoodCham. I loved the idea when I thought of implementing it in my restaurant, Roast House. Looking forward to making my restaurant remote and digital with Foodcham.</p>
                        {/* <p className="legend">Legend 1</p> */}
                        </div>
                    </div>
                    <div>
                        <img src={img2} className="img-responsive"/>
                        <div className="col-md-6 col-md-offset-3">
                            <p>Loved the concept and the product when I used this at Spezia Bistro cafe, Hudson lane. It was so easy to order food from the tabs. Thanks for including the sharpest customization and let us order what we actually want to eat!
                            </p>
                        {/* <p className="legend">Legend 1</p> */}
                        </div>
                    </div>
                    <div>
                        <img src={img3} className="img-responsive"/>
                        <div className="col-md-6 col-md-offset-3">
                            <p>Was really impressed by the idea when I used it for the first time. It enhanced my experience while my dine in with my family. I could spend more quality time with my family rather than getting involved in conversations with the waiters.
                            It is a proud feeling to see the students of my college bring up such innovations.The idea is innovative and compelling, 
                            </p>
                        {/* <p className="legend">Legend 1</p> */}
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
};