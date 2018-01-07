import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../assets/img/career/foodcham-user-1.jpg';
import img2 from '../../assets/img/career/foodcham-user-2.jpg';
import img3 from '../../assets/img/career/foodcham-user-3.jpg';



export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div>
                        <img src={img1} className="img-responsive"/>
                        <div className="col-md-6 col-md-offset-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, odio sit amet consequat semper, quam eros faucibus lorem, eget dignissim massa nisi in turpis. Sed mattis gravida nisi ut sodales. Aenean a quam nunc. Vivamus laoreet quam purus, non tincidunt elit sodales in. Maecenas posuere dolor at auctor semper. Sed dui lacus, rutrum sollicitudin pharetra quis, ullamcorper hendrerit libero. Phasellus at lacinia ante. Nullam tincidunt vehicula ex. Maecenas facilisis rutrum velit, id eleifend metus placerat et. Maecenas auctor, erat id volutpat facilisis, eros neque placerat enim, in varius tellus lorem sit amet erat.</p>
                        {/* <p className="legend">Legend 1</p> */}
                        </div>
                    </div>
                    <div>
                        <img src={img2} className="img-responsive"/>
                        <div className="col-md-6 col-md-offset-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, odio sit amet consequat semper, quam eros faucibus lorem, eget dignissim massa nisi in turpis. Sed mattis gravida nisi ut sodales. Aenean a quam nunc. Vivamus laoreet quam purus, non tincidunt elit sodales in. Maecenas posuere dolor at auctor semper. Sed dui lacus, rutrum sollicitudin pharetra quis, ullamcorper hendrerit libero. Phasellus at lacinia ante. Nullam tincidunt vehicula ex. Maecenas facilisis rutrum velit, id eleifend metus placerat et. Maecenas auctor, erat id volutpat facilisis, eros neque placerat enim, in varius tellus lorem sit amet erat.</p>
                        {/* <p className="legend">Legend 1</p> */}
                        </div>
                    </div>
                    <div>
                        <img src={img3} className="img-responsive"/>
                        <div className="col-md-6 col-md-offset-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, odio sit amet consequat semper, quam eros faucibus lorem, eget dignissim massa nisi in turpis. Sed mattis gravida nisi ut sodales. Aenean a quam nunc. Vivamus laoreet quam purus, non tincidunt elit sodales in. Maecenas posuere dolor at auctor semper. Sed dui lacus, rutrum sollicitudin pharetra quis, ullamcorper hendrerit libero. Phasellus at lacinia ante. Nullam tincidunt vehicula ex. Maecenas facilisis rutrum velit, id eleifend metus placerat et. Maecenas auctor, erat id volutpat facilisis, eros neque placerat enim, in varius tellus lorem sit amet erat.</p>
                        {/* <p className="legend">Legend 1</p> */}
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
};