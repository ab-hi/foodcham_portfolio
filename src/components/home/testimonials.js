import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
export default class Testimonials extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, odio sit amet consequat semper, quam eros faucibus lorem, eget dignissim massa nisi in turpis. Sed mattis gravida nisi ut sodales. Aenean a quam nunc. Vivamus laoreet quam purus, non tincidunt elit sodales in. Maecenas posuere dolor at auctor semper. Sed dui lacus, rutrum sollicitudin pharetra quis, ullamcorper hendrerit libero. Phasellus at lacinia ante. Nullam tincidunt vehicula ex. Maecenas facilisis rutrum velit, id eleifend metus placerat et. Maecenas auctor, erat id volutpat facilisis, eros neque placerat enim, in varius tellus lorem sit amet erat.</p>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    {/* <img src="assets/2.jpeg" /> */}
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, odio sit amet consequat semper, quam eros faucibus lorem, eget dignissim massa nisi in turpis. Sed mattis gravida nisi ut sodales. Aenean a quam nunc. Vivamus laoreet quam purus, non tincidunt elit sodales in. Maecenas posuere dolor at auctor semper. Sed dui lacus, rutrum sollicitudin pharetra quis, ullamcorper hendrerit libero. Phasellus at lacinia ante. Nullam tincidunt vehicula ex. Maecenas facilisis rutrum velit, id eleifend metus placerat et. Maecenas auctor, erat id volutpat facilisis, eros neque placerat enim, in varius tellus lorem sit amet erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, odio sit amet consequat semper, quam eros faucibus lorem, eget dignissim massa nisi in turpis. Sed mattis gravida nisi ut sodales. Aenean a quam nunc. Vivamus laoreet quam purus, non tincidunt elit sodales in. Maecenas posuere dolor at auctor semper. Sed dui lacus, rutrum sollicitudin pharetra quis, ullamcorper hendrerit libero. Phasellus at lacinia ante. Nullam tincidunt vehicula ex. Maecenas facilisis rutrum velit, id eleifend metus placerat et. Maecenas auctor, erat id volutpat facilisis, eros neque placerat enim, in varius tellus lorem sit amet erat.</p>
                </div>
                <div>
                    {/* <img src="assets/3.jpeg" /> */}
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, odio sit amet consequat semper, quam eros faucibus lorem, eget dignissim massa nisi in turpis. Sed mattis gravida nisi ut sodales. Aenean a quam nunc. Vivamus laoreet quam purus, non tincidunt elit sodales in. Maecenas posuere dolor at auctor semper. Sed dui lacus, rutrum sollicitudin pharetra quis, ullamcorper hendrerit libero. Phasellus at lacinia ante. Nullam tincidunt vehicula ex. Maecenas facilisis rutrum velit, id eleifend metus placerat et. Maecenas auctor, erat id volutpat facilisis, eros neque placerat enim, in varius tellus lorem sit amet erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, odio sit amet consequat semper, quam eros faucibus lorem, eget dignissim massa nisi in turpis. Sed mattis gravida nisi ut sodales. Aenean a quam nunc. Vivamus laoreet quam purus, non tincidunt elit sodales in. Maecenas posuere dolor at auctor semper. Sed dui lacus, rutrum sollicitudin pharetra quis, ullamcorper hendrerit libero. Phasellus at lacinia ante. Nullam tincidunt vehicula ex. Maecenas facilisis rutrum velit, id eleifend metus placerat et. Maecenas auctor, erat id volutpat facilisis, eros neque placerat enim, in varius tellus lorem sit amet erat.</p>
                </div>
            </Carousel>
        );
    }
};