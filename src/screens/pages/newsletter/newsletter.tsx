import React from 'react';
import './newsletter.scss'
import cealogo from "../../../assets/images/image1.png"
import iitmlogo from "../../../assets/images/iitm-logo.png"
import article1 from "../../../assets/images/article1.png"
import article2 from "../../../assets/images/article2.png"
import article3 from "../../../assets/images/article3.png"
import article4 from "../../../assets/images/article4.png"
import emaillogo from "../../../assets/images/email.png"

type NewsletterProps = {

};

const NewsLetter: React.FC<NewsletterProps> = () => {

    return (
        <div className="main-conatiner">
            <div className="newsletter-container">
                <div className="heading">
                    <img src={cealogo} alt="" className='cea-logo' />
                    <div className="main-heading">
                        <div className='cea'>CEA </div>
                        <div className="newsletter">NEWSLETTER</div>
                    </div>
                    <img src={iitmlogo} alt="" className='iitm-logo' />
                </div>
                <hr className='line1' />

                <div className='theme-heading'>
                    <div className="punarnava">PUNARNAVAN </div>
                    “Dive into the world of Construction Resilenece”
                </div>

                <div className="article1 articles">
                    <div className="article-text">
                        The  Civil    Engineering   Association (CEA) of  IIT Madras  has unveiled the theme for its flagship event, CEA Fest 2024. “PUNARNAVAN” a Sanskrit word that refers to  ‘rebirth’  and ‘resilience’ perfectly captures  the essence of our theme  “upcycling, rejuvenation, and re-engineering existing infrastructure creatively into modern needs”. The fest reimagines  the  future  of  infrastructure through  a lens of mindful  resource utilization and  sustainable practices and  promises to redefine the very fabric of our built environment.
                    </div>
                    <img src={article1} alt="" className='articlephoto1' />
                </div>
                {/* <div className="text3">
                    
                </div> */}
                <div className="hyperlink">
                    Read more about our theme at <a href="#">LINK</a>
                </div>
                <hr className='line' />

                <div className="research-heading">
                    <div className="research">RESEARCH</div> INSIGHTS
                </div>
                <div className="subheading1">
                    <div className="first">AN EMERGING PANDEMIC</div>
                    <div className="second">"ANTI-MICROBIAL RESISTANCE IN THE ENVIRONMENT"</div>
                </div>
                <div className="article2 articles">
                    <img src={article2} alt="" className='articlephoto2' />
                    <div className="text">
                        In    a    world   still   grappling   with  the COVID-19  pandemic, another  insidious health crisis is silently creeping upon us Antimicrobial Resistance   (AMR).  AMR, the ability of   bacteria to   withstand  the effects  of antibiotics,    poses  a  looming threat   that   could surpass   even the impact of COVID-19.This phenomenon renders infections more challenging to treat, leading to  treatment failures,  prolonged illnesses, and an increased risk of mortality. It is no exaggeration to say that AMR is a ...... <a href="#">Read more</a>
                    </div>
                </div>
                <hr className='line' />

                <div className="subheading2">
                    <div className="fireside">FIRESIDE </div>
                    CHAT
                </div>
                <div className="article3 articles">
                    <div className="text">
                        Prof. Phanisri Pradeep Pratapa, a leading   expert in lattice mechanics, meta-materials, and origami   engineering, is  revolutionizing   the construction industry with his innovative research. In a recent interview, he shared his insights on the future of construction materials and techniques.
                        <div className='anchor3'>
                            Checkout the full interview <a href="#">HERE</a>
                        </div>
                    </div>
                    <img src={article3} alt="" className='articlephoto3' />
                </div>
                <hr className='line' />

                <div className="subheading3">
                    SUSTAINABLE CAMPUSES
                </div>
                <div className="article4 articles">
                    <img src={article4} alt="" className='articlephoto4' />
                    <div className="text">
                        Sustainable Campuses is an  innovative initiative that   invites    students     from colleges   nationwide to    showcase and celebrate    the   sustainable    measures being implemented on their campuses.
                    </div>
                </div>
                <hr className='line' />
                <div className="footer1">
                    <div className="part1">
                        <div className="part1-info">
                            BE AN INTEGRAL PART OF OUR JOURNEY!
                        </div>
                        <div className="box">Become a CEA Ambassador.</div>
                    </div>
                    <div className="part2">
                        <div className="part2-info">
                            Check out the latest CEA Journal at
                        </div>
                        <div className='anchor4'>
                            <a href="https://drive.google.com/file/d/1P-yNW7xZ_WtIxTzOQjnN-18UOyKplMsc/view">LINK</a>
                        </div>
                    </div>
                </div>
                
                <div className="footer2">
                    <div className="part21">
                        An initiative by the,
                        <div>Civil Engineering Association, IIT Madras</div>
                    </div>
                    <div className="part22">
                        <a href="mailto:cea_sec@smail.iitm.ac.in"><img src={emaillogo} alt="" className='email-icon' /></a>
                        cea_sec@smail.iitm.ac.in
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
