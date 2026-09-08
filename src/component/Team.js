import React from 'react'
import Team5 from '../image/Team5.png'
import Team6 from '../image/Team6.webp'
const Team = () => {
  return (
    <>

<section className="WhyChooseNile JoinOurTeam">
        <section className="JoinOurTeam-text JoinOurTeam">
            <p>Join Our Team</p>
            <p>Ready to embark on a journey of innovation and growth? Join the NILE family and be part of something bigger. We're looking for individuals who are:</p>
        </section>
        
        <section className="JoinOurTeam-cards ">
            {/* <!-- First Left sidebar --> */}
            <section className="JoinOurTeam-cards-first JoinOurTeam-card  " >
                <section className="JoinOurTeam-card-first-one">
                    {/* <!-- image --> */}
                    <div className="JoinOurTeam-card-first-img">
                        <div className="JoinOurTeam-card-first-img-overlay"></div>
                    </div>
                    {/* <!-- text --> */}
                    <div className="JoinOurTeam-card-first-text">
                        <h3>Passionate <br/> For Career</h3>
                        <div>
                            <ul>
                                <li>Drive and Motivation</li>
                                <li>Resilience</li>
                                <li>Continuous Learning</li>
                                <li>Innovation and Creativity</li>
                            </ul>
                        </div>
                        <div>
                            <a href="/" className="JoinOurTeam-startbutton">start here</a>
                        </div>
                    </div>
                </section>
                <section className="JoinOurTeam-card-first-one">
                    {/* <!-- image --> */}
                    <div className="JoinOurTeam-card-first-img JoinOurTeam-card-secondImage ">
                        <div className="JoinOurTeam-card-first-img-overlay"></div>
                    </div>
                    {/* <!-- text --> */}
                    <div className="JoinOurTeam-card-first-text">
                        <h3>Committed to <br/> excellence</h3>
                        <div>
                            <ul>
                                <li>High Standards</li>
                                <li> Continuous  Improvementlience </li>
                                <li>Attention to Detail</li>
                                <li>Accountability</li>
                            </ul>
                        </div>
                        <div>
                            <a href="/" className="JoinOurTeam-startbutton">start here</a>
                        </div>
                    </div>
                </section>
            </section>
            {/* <!-- second right sidebar --> */}
            <section className="JoinOurTeam-cards-first JoinOurTeam-card JoinOurTeam-extramargin-container ChoseeTeamcard2" >
                <section className="JoinOurTeam-card-first-one">
                    {/* <!-- image --> */}
                    <div className="JoinOurTeam-card-first-img JoinOurTeam-card-ThirdImage">
                        <div className="JoinOurTeam-card-first-img-overlay"></div>
                    </div>
                    {/* <!-- text --> */}
                    <div className="JoinOurTeam-card-first-text">
                        <h3>Team <br/>
                            players</h3>
                        <div>
                            <ul>
                                <li>Collaboration</li>
                                <li>ResiEffective  Communicationlience</li>
                                <li>Adaptability</li>
                                <li>Supportive and Empathetic</li>
                            </ul>
                        </div>
                        <div>
                            <a href="/" className="JoinOurTeam-startbutton">start here</a>
                        </div>
                    </div>
                </section>
                <section className="JoinOurTeam-card-first-one JoinOurTeam-extramargin">
                    {/* <!-- image --> */}
                    <div className="JoinOurTeam-card-first-img JoinOurTeam-card-FourthImage">
                        <div className="JoinOurTeam-card-first-img-overlay"></div>
                    </div>
                    {/* <!-- text --> */}
                    <div className="JoinOurTeam-card-first-text">
                        <h3>Creative problem <br/> solvers</h3>
                        <div>
                            <ul>
                                <li>Adaptability</li>
                                <li>Analytical Skills</li>
                                <li>Thinking Outside the Box</li>
                                <li>Collaboration</li>
                            </ul>
                        </div>
                        <div>
                            <a href="/" className="JoinOurTeam-startbutton">start here</a>
                        </div>
                    </div>
                </section>
            </section>
        </section>

    </section>


    <section className="ExploreOurOpportunities">
        <div className="ExploreOurOpportunities-first-section">
            <p>Explore Our Opportunities</p>
        </div>
        <div>
            <p style={{color:"#7a7a7a"}}>Discover a range of exciting career opportunities at NILE across various departments and locations. Whether you’re an experienced professional or just starting your career, we have a place for you.</p>
        </div>
        <section className="ExploreOurOpportunities-second-section ">
            <div className="ExploreOurOpportunities-ContactUs">
                <div className="ContactUs-imagecontainer">
                    <div className="ContactUs-imagecontainer-overlay"></div>
                    <img src={Team5} alt=""/>
                </div>
                <div className="ContactUs-imagecontainer-text">
                    <h3>Contact Us</h3>
                    <p>If you have any questions or need assistance with the application process, please don’t hesitate to contact our HR team. We’re here to help.</p>
                    <a href="/" style={{textecoration: "underline", color: "black"}}>Click Here</a>
                </div>
            </div>
            <div className="ExploreOurOpportunities-ContactUs">
                <div className="ContactUs-imagecontainer">
                    <div className="ContactUs-imagecontainer-overlay"></div>
                    <img src={Team6} alt=""/>
                </div>
                <div className="ContactUs-imagecontainer-text">
                    <h3>Join Us in Shaping the Future</h3>
                    <p>At NILE, we’re not just building a company, we’re building a future. Explore our career opportunities and be part of our innovative journey.</p>
                    <a href="/" style={{textecoration: "underline", color: "black"}}>Click Here</a>
                </div>
            </div>
        </section>
    </section>
      
    </>
  )
}

export default Team
