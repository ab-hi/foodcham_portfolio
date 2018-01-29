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
                                    The food industry is changing and you have probably noticed that your restaurant is being exposed to a technological revolution.
                                    You may feel that you’re falling behind the times and in order to compete in this instantly gratifying world, you need something
                                    that will give your business the edge it needs. This is where TastyIgniter can bring your business into the 21st Century.
                                </p>
                                <div className="col-sm-7">
                                    <AboutQA question="What is TastyIgniter?">
                                        TastyIgniter is a free piece of open source software specifically written for restaurants. It can be fully customised for your business and takes the pressure
                                        off everyday tasks. All you need to do to use the software is make sure your web host meets the minimum requirements needed for
                                        TastyIgniter to run effectively.
                                    </AboutQA>

                                    <AboutQA question="What do you mean, it’s open source?">
                                    Open source is software that can be modified and shared by those who wish to work collaboratively to make it even better and
                                    improve its functionality. We value the contributions members of our community can make, as they can drive its progress and
                                    development to make it even better for everyone. More information on how you can get involved in the development of
                                    TastyIgniter can be found here
                                    </AboutQA>

                                    <AboutQA question="Wait - I’m not a programmer, how can I access future developments?">
                                    We promise to offer free support and updates periodically and stable, updated versions of the software will be released regularly.
                                    Getting involved with the TastyIgniter community is paramount and if you want to stay informed, then feel free to join the
                                    official teams
                                    </AboutQA>
                                </div>
                                <div className="col-sm-5">
                                    <img src={fc_about} className="img-responsive" />
                                </div>

                                <br clear="both" />

                                <AboutQA question="How can I set up TastyIgniter?">
                                TastyIgniter is a free, ready to use, customisable system that you can easily access without any technical knowledge or experience.
                                Just download and install the software and you’re ready to go.
                                </AboutQA>

                                <AboutQA question="How can I reach out to my customers?">
                                Add your menu to give your customers a breakdown of what they can order. They decide what they want, arrange a delivery or
                                collection and pay for their food. If they prefer, they can book a table online through the reservation function and your staff
                                will be able to view the booking and take care of your customer as soon as they walk through the door.
                                </AboutQA>

                                <AboutQA question="How can I reach out to my customers?">
                                Add your menu to give your customers a breakdown of what they can order. They decide what they want, arrange a delivery or
                                collection and pay for their food. If they prefer, they can book a table online through the reservation function and your staff
                                will be able to view the booking and take care of your customer as soon as they walk through the door.
                                </AboutQA>

                                <AboutQA>
                                You can also stay in contact with your customers through newsletters and send out emails offering discounts or targeted promotional
                                campaigns to increase revenue.
                                </AboutQA>

                                <AboutQA question="In conclusion:">
                                <ul>
                                    <li>TastyIgniter is a free, easy to use, customisable system.</li>
                                    <li>It gives you some amazing tools which allow you to manage your business.</li>
                                    <li>You can view summary reports to show you how your business is performing.</li>
                                </ul>
                                </AboutQA>

                                <AboutQA>
                                TastyIgniter is only going to get better with time; you really have nothing to lose and everything to gain.
                                <a href="download.html">Download</a> the software today, or see the
                                <a href="demo.html">demo</a> for a preview of how TastyIgniter can help shape the future success of your business
                                </AboutQA>
                            </div>
                        </div>
                        
                    </div>
                    

                </div>
                
                <div className="row home-cfa margin-top-sm">
                <h3>Our Team</h3>

                    <div className="container">
                        <TeamMember img={member1} name="full name" designation="designation"/>
                        <TeamMember img={member1} name="full name" designation="designation"/>
                        <TeamMember img={member1} name="full name" designation="designation"/>
                        <TeamMember img={member1} name="full name" designation="designation"/>
                        <TeamMember img={member1} name="full name" designation="designation"/>
                        <TeamMember img={member1} name="full name" designation="designation"/>

                    </div>
                    </div>
            </section>

        )
    }
}