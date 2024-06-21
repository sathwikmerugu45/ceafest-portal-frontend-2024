import React, { useContext } from 'react';
import './home.scss'
import Gallerypage from "../../../components/gallery/gallery";
// import Newsletter from "../newsletter/newsletter";
import Navbar from '../../../components/navbar/navbar';
import Title from "../../../../src/ui-elements/title/title"
import Footer from '../../../components/footer/footer'
import About from '../about/about';
import Stats from '../../../components/stats/stats';
import linkedin_footer from "../../../assets/images/linkedin_footer.png";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { AuthContext } from '../../../utils/authProvider';
import MessagePopup from '../../../ui-elements/messagePopup/messagePopup';


type HomeProps = {

};

const Home: React.FC<HomeProps> = () => {
    const { user, refetch } = useContext(AuthContext)
    const { device } = useSelector((state: RootState) => state.windowSize);
    return (
        <div className="home-page">
            {
                user.CEAFESTID !== "TESTID"  ? 
                <>
                <MessagePopup 
                    message={'Registrations for Terraquake Events and Workshops has been Closed'}
                    position={'bottom-right'}
                    category={'warning'}
                    delay={5}
                />
                </>
                : 
                null
            }
                
            <div className="navbar-wrapper">
                <Navbar />
            </div>
            <Stats />
            <div className={`youtube-video ${device}`}>
                <iframe 
                    width="560" 
                    // height="315" 
                    src="https://www.youtube.com/embed/VlBfrh_IfFs?si=Gk1fv08WRtE-bZig" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>
            <div className={`youtube-video ${device}`}>
                <iframe 
                    width="560" 
                    // height="315" 
                    src="https://www.youtube.com/embed/rS7kBMQP-_M?si=2kxvkkr-y8UutzH7" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>

            {/* <div className="about-wrapper">
                <About />
            </div> */}
            <Footer color="" />
            <div className="developer-wrapper">
                <div className={`developed-by ${device}`}>
                    <p>Developed by</p>
                    <div className={`developers ${device}`}>
                        <div className="coords1">
                            <div className='detailising'>
                                <a href="https://www.linkedin.com/in/sudheer-jangam-a1050625b">< img className='linkedin-developer' src={linkedin_footer} alt="linkedin"  /></a>
                                <p className = {`coordname ${device}`}>Sudheer</p>
                            </div>
                            <div className='detailising'>
                                <a href="https://www.linkedin.com/in/rohith-kumar-mokhara-981293253">< img className='linkedin-developer' src={linkedin_footer} alt="linkedin" /></a>
                                <p className = {`coordname ${device}`}>Rohith</p>
                            </div>
                        </div>
                        <div className="core" >
                            <div className='detailising'>
                            <a href="https://www.linkedin.com/in/shivarammorigala">< img className='linkedin-developer' src={linkedin_footer} alt="linkedin"  /></a>
                            <p className = {`coordname ${device}`}>Shivaram</p>
                            </div>
                            
                        </div>
                        <div className="coords2">
                            <div className='detailising'>
                                <a href="https://www.linkedin.com/in/isaac-chinthalagattu-460690233/">< img className='linkedin-developer' src={linkedin_footer} alt="linkedin"  /></a>
                                <p className = {`coordname ${device}`}>Isaac</p>
                            </div>
                            <div className='detailising'>
                                <a href="https://www.linkedin.com/in/sathwik45/">< img className='linkedin-developer' src={linkedin_footer} alt="linkedin"  /></a>
                                <p className = {`coordname ${device}`}>Sathwik</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Home

