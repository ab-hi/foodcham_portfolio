import React from 'react';

import AboutQA from './about-qa';
import TeamMember from './team';

import member1 from '../../assets/img/under-500-limetray.png';
import fc_about from '../../assets/img/fc-about.jpg';

export default class AboutBody extends React.Component{
    render(){
        return(
            <section id="site-content">
                <div className="container wrap-top-sm">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-content">
                                <p>
                                   At Foodcham, our primary goal is to bring a change in the food ordering system of a restaurant and bringing the immense customer experience to the very niche of the food Industry,
                                   i.e fine dining restaurants by replacing the already running Physical Menus. Since digitization is a reflection of the future, pushing the Menu and orders of a restaurant online 
                                   fetches scope and room for a lot of analysis and improvement in the user experience. The primary goal being giving the users and customers a users an ease and command over the digital system. 
                                </p>
                                <div className="col-sm-7">
                                    <AboutQA question="What is Foodcham?">
                                        Foodcham is a Food-Tech startup, aiming at revolutionizing the food ordeing experience in a restaurant, by enhancing it digitally. Foodcham offers 2 basic digital
                                        ordering products. <br/> Digital Ordering Menu. <br/> Waiter Ordering Menu <br/>
                                    </AboutQA>

                                    <AboutQA question="Digital Ordering Menu">
                                    Digital Ordering Menu is for the better user experience in ordering food in a restaurant. To help the users understand
                                    the menu items easily through digital representations. Digital Ordering is completely online and cloud based, making it
                                    easy to update the menu and manage orders online.
                                    </AboutQA>

                                    <AboutQA question="Waiter Ordering Menu">
                                    Waiter Ordering Menu is for the restaurant with high visitor base already. Who intend to decrease the order serving time
                                    in their restaurant. With Waiter Ordering Menu, the orders can be automated and monitored online with easy updation and management.
                                    </AboutQA>
                                </div>
                                // <div className="col-sm-5">
                                //     <img src={fc_about} className="img-responsive" />
                                // </div>

                                // <br clear="both" />

                                // <AboutQA question="How can I set up Foodcham?">
                                // Foodcham is a free, ready to use, customisable system that you can easily access without any technical knowledge or experience.
                                // Just download and install the software and you’re ready to go.
                                // </AboutQA>

                                // <AboutQA question="How can I reach out to my customers?">
                                // Add your menu to give your customers a breakdown of what they can order. They decide what they want, arrange a delivery or
                                // collection and pay for their food. If they prefer, they can book a table online through the reservation function and your staff
                                // will be able to view the booking and take care of your customer as soon as they walk through the door.
                                // </AboutQA>

                                // <AboutQA question="How can I reach out to my customers?">
                                // Add your menu to give your customers a breakdown of what they can order. They decide what they want, arrange a delivery or
                                // collection and pay for their food. If they prefer, they can book a table online through the reservation function and your staff
                                // will be able to view the booking and take care of your customer as soon as they walk through the door.
                                // </AboutQA>

                                // <AboutQA>
                                // You can also stay in contact with your customers through newsletters and send out emails offering discounts or targeted promotional
                                // campaigns to increase revenue.
                                // </AboutQA>

                                // <AboutQA question="In conclusion:">
                                // <ul>
                                //     <li>Foodcham is a free, easy to use, customisable system.</li>
                                //     <li>It gives you some amazing tools which allow you to manage your business.</li>
                                //     <li>You can view summary reports to show you how your business is performing.</li>
                                // </ul>
                                // </AboutQA>

                            //     <AboutQA>
                            //     Foodcham is only going to get better with time; you really have nothing to lose and everything to gain.
                            //     <a href="download.html">Download</a> the software today, or see the
                            //     <a href="demo.html">demo</a> for a preview of how Foodcham can help shape the future success of your business
                            //     </AboutQA>
                            // </div>
                        </div>
                        
                    </div>
                    

                </div>
                
                <div className="row home-cfa margin-top-sm">
                <h3>Our Team</h3>

                    <div className="container">
                        <TeamMember img={member1} name="Jasbir Singh Bhatia" designation="Co-Founder"/>
                        <TeamMember img={member1} name="Ashish Gulati" designation="Co-Founder"/>
                        <TeamMember img={member1} name="Navdeep Singh Oberoi" designation="Manager"/>
                        <TeamMember img={member1} name="Abhishek Bansal" designation="Web Developer"/>
                        <TeamMember img={member1} name="Shubham Aggarwal" designation="Web Developer"/>
                        <TeamMember img={member1} name="Mohit Puri" designation="Android Developer"/>
                        <TeamMember img={member1} name="Himanshu Khosla" designation="Web Developer"/>
                        <TeamMember img={member1} name="Jayesh Bidani" designation="Techincal Support"/>

                    </div>
                    </div>
            </section>

        )
    }
}