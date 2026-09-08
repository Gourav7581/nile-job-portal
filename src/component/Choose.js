import React from 'react'
import Choose1 from '../image/Choos1.webp'
import Choose2 from '../image/Choose2.webp'
import Choose3 from '../image/Choose3.webp'
import Choose4 from '../image/Choose4.png'
const Choose = () => {
  return (
    <>
    <section className="WhyChooseNile">
        <section className="WhyChooseNile-text EqualSpacer">
            <p>Why Choose Nile?</p>
            <p>At NILE, we’re more than just a company, we’re a community of driven professionals working together to shape the future. Here’s why you should consider a career with us:</p>
        </section>
        
        <section className="WhyChooseNile-cards">
            <div className="WhyChooseNile-card WhyChooseNile-card-one">
                <div className="WhyChooseNileCard-NestedOne">
                    <div className="WhyChooseNileCard-NestedTwo">
                        <div className="WhyChooseNileCard-NestedThree">
                            <div className="WhyChooseNileCard-NestedFour">
                                <img src={Choose1} alt="" width="45px" height="45px"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WhyChooseNile-card-text">
                    <p>Innovative Environment</p>
                    <p>We foster a culture of innovation, where your ideas are valued, and you have the opportunity to work on groundbreaking <br/>projects.</p>
                </div>
            </div>


            {/* <!-- Trial -->  */}
            <div className="WhyChooseNile-card CareerGrowth-card-one">
                <div className=" CareerGrowth-NestedOne">
                    <div className=" CareerGrowth-NestedTwo">
                        <div className=" CareerGrowth-NestedThree">
                            <div className=" CareerGrowth-NestedFour">
                                <img src={Choose2} alt="" width="45px" height="45px"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WhyChooseNile-card-text">
                    <p>Career Growth</p>
                    <p>NILE is committed to your professional development. We provide ongoing training and advancement opportunities to help you reach your full potential.</p>
                </div>
            </div>
{/* 
            <!-- Other Cards -->
            <!-- <div className="WhyChooseNile-card WhyChooseNile-card-one">
                <div className="WhyChooseNileCard-NestedOne">
                    <div className="WhyChooseNileCard-NestedTwo">
                        <div className="WhyChooseNileCard-NestedThree">
                            <div className="WhyChooseNileCard-NestedFour">
                                <img src="Images/eco-energy.webp" alt="" width="45px" height="45px">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WhyChooseNile-card-text">
                    <p>Innovative Environment</p>
                    <p>We foster a culture of innovation, where your ideas are valued, and you have the opportunity to work on groundbreaking projects.</p>
                </div>
            </div> --> */}

            <div className="WhyChooseNile-card WhyChooseNile-card-one">
                <div className="WhyChooseNileCard-NestedOne">
                    <div className="WhyChooseNileCard-NestedTwo">
                        <div className="WhyChooseNileCard-NestedThree">
                            <div className="WhyChooseNileCard-NestedFour">
                                <img src={Choose3} alt="" width="45px" height="45px"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WhyChooseNile-card-text">
                    <p>Diversity and Inclusion</p>
                    <p>We celebrate diversity and value different perspectives. Our inclusive environment empowers all employees to thrive.</p>
                </div>
            </div>

            <div className="WhyChooseNile-card  WhyChooseNile-card-one ImpactfulWork-card-one">
                <div className="WhyChooseNileCard-NestedOne ImpactfulWork-NestedOne">
                    <div className="WhyChooseNileCard-NestedTwo ImpactfulWork-NestedTwo">
                        <div className="WhyChooseNileCard-NestedThree ImpactfulWork-NestedThree">
                            <div className="WhyChooseNileCard-NestedFour ImpactfulWork--NestedFour">
                                <img src={Choose4} alt="" width="45px" height="45px"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WhyChooseNile-card-text">
                    <p>Impactful Work</p>
                    <p>Join us in solving complex challenges that have a real-world impact. Your work at NILE can change lives and industries.</p>
                </div>
            </div>

            


        </section>
    </section>
      
    </>
  )
}

export default Choose
