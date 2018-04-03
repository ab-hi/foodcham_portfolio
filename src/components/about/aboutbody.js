import React from 'react';

import AboutQA from './about-qa';
import TeamMember from './team';

import member1 from '../../assets/img/team/ashish_gulati.jpg';
import member2 from '../../assets/img/team/jasbir_singh.jpg';
import member3 from '../../assets/img/team/mohit_puri.jpg';
import member5 from '../../assets/img/team/navdeep.jpg';
import member6 from '../../assets/img/team/abhishek_bansal.jpg';
import member7 from '../../assets/img/team/himanshu_khosla.jpeg';


import fc_about from '../../assets/img/fc-about.png';

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
                                <div className="col-sm-5">
                                     <img src={fc_about} className="img-responsive" />
                                 </div>

                                 <br clear="both" />

                        </div>
                        </div>
                        
                    </div>
                    

                </div>
                
                <div className="row home-cfa margin-top-sm">
                <h3>Our Team</h3>

                    <div className="container">
                        <TeamMember img={member2} name="Jasbir Singh Bhatia" designation="Co-Founder"/>
                        <TeamMember img={member1} name="Ashish Gulati" designation="Co-Founder"/>
                        <TeamMember img={member5} name="Navdeep Singh Oberoi" designation="Manager"/>
                        <TeamMember img={member5} name="Shubham Aggarwal" designation="Web Developer"/>
                        <TeamMember img={member3} name="Mohit Puri" designation="Android Developer"/>
                        <TeamMember img={member7} name="Himanshu Khosla" designation="Web Developer"/>
                        <TeamMember img={member6} name="Abhishek Bansal" designation="Web Developer"/>

                    </div>
                    </div>
            </section>

        )
    }
}