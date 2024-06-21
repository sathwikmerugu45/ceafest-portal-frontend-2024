import React from "react";
import "./footer.scss";
import youtube_footer from "../../assets/images/youtube_footer.png"
import facebook_footer from "../../assets/images/facebook_footer.png"
import linkedin_footer from "../../assets/images/linkedin_footer.png"
import instagram_footer from "../../assets/images/instagram_footer.png"
import gmail from "../../assets/images/gmail.png"
import whatsapp from "../../assets/images/whatsapp.png"
import X from "../../assets/images/X.png"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

interface FooterProps {
  color: string;
}
export const Footer: React.FC<FooterProps> = (color) => {
  const { device } = useSelector((state: RootState) => state.windowSize);
  return (
    <div className={`custom-footer ${device}`}>
      <div className={`contact-heading ${device}`}>
        <h1 className={`contact-headingh1 ${device}`}>Contact us for any queries</h1>
      </div>
      <hr className="custom-line"></hr>
      <div className="events-team">
        <div className={`event-heading ${device}`}>
          <h2 className={`event-headingh2 ${device}`}>Events Core Team</h2>
        </div>
        <div className={`events-cores ${device}`}>
          <div className={`core-details ${device}`}>
            <div className={`name ${device}`}>
              Vishnu Chetan
            </div>
            <div className={`social-media ${device}`}>
              <div className={`logo ${device}`}>
                <img className={`logoimg ${device}`} src={gmail} alt="" />
              </div>
              <div className={`detail ${device}`}>
                <a href="mailto:ceaevents@smail.iitm.ac.in" className={`custom-email ${device}`}>
                  ceaevents@smail.iitm.ac.in </a>
              </div>
            </div>
            <div className={`social-media ${device}`}>
              <div className={`logo ${device}`}>
                <img className={`logoimg ${device}`} src={linkedin_footer} alt=""  />
              </div>
              <div className={`detail ${device}`}>
                <a href="https://www.linkedin.com/in/vishnu-chetan-a90606251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={`custom-linkedin ${device}`}>
                  Vishnu Chetan</a>
              </div>
            </div>
            <div className={`social-media ${device}`}>
              <div className={`logo ${device}`}>
                <img className={`logoimg ${device}`} src={whatsapp} alt="" />
              </div>
              <div className={`detail ${device}`}>
                <a href="//api.whatsapp.com/send?phone=919110573986" target="_blank" className={`custom-whatsapp ${device}`} rel="noreferrer">
                  9110573986</a>
              </div>
            </div>
          </div>
          <div className={`core-details ${device}`}>
            <div className={`name ${device}`}>
              Eswari
            </div>
            <div className={`social-media ${device}`}>
              <div className={`logo ${device}`}>
                <img className={`logoimg ${device}`} src={gmail} alt="" />
              </div>
              <div className={`detail ${device}`}>
                <a href="mailto:ceaevents@smail.iitm.ac.in" className={`custom-email ${device}`}>
                  ceaevents@smail.iitm.ac.in 
                </a>
              </div>
            </div>
            <div className={`social-media ${device}`}>
              <div className={`logo ${device}`}>
                <img className={`logoimg ${device}`} src={linkedin_footer} alt="" />

              </div>
              <div className={`detail ${device}`}>
                <a href="https://www.linkedin.com/in/eswari-begari-492192252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={`custom-linkedin ${device}`}>
                  Eswari
                </a>
              </div>
            </div>
            <div className={`social-media ${device}`}>
              <div className={`logo ${device}`}>
                <img className={`logoimg ${device}`} src={whatsapp} alt="" />
              </div>
              <div className={`detail ${device}`}>
                <a href="//api.whatsapp.com/send?phone=918919227494" target="_blank" className={`custom-whatsapp ${device}`} rel="noreferrer">
                8919227494</a>
              </div>
            </div>
          </div>
          <div className={`core-details ${device}`}>
            <div className={`name ${device}`}>
              Anvesh
            </div>
            <div className={`social-media ${device}`}>
              <div className={`logo ${device}`}>
                <img className={`logoimg ${device}`} src={gmail} alt="" />
              </div>
              <div className={`detail ${device}`}>
                <a href="mailto:ceaevents@smail.iitm.ac.in" className={`custom-email ${device}`}>
                  ceaevents@smail.iitm.ac.in </a>
              </div>
            </div>
            <div className={`social-media ${device}`}>
              <div className={`logo ${device}`}>
                <img className={`logoimg ${device}`} src={linkedin_footer} alt="" />
              </div>
              <div className={`detail ${device}`}>
                <a href="https://www.linkedin.com/in/ceelam-anvesh-838a44233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={`custom-linkedin ${device}`}>
                  Anvesh
                </a>
              </div>
            </div>
            <div className={`social-media ${device}`}>
              <div className={`logo ${device}`}>
                <img className={`logoimg ${device}`} src={whatsapp} alt="" />
              </div>
              <div className={`detail ${device}`}>
                <a href="//api.whatsapp.com/send?phone=918328607055" target="_blank" className={`custom-whatsapp ${device}`} rel="noreferrer">
                  8328607055</a>
              </div>
            </div>
          </div>
        </div>

        <div className={`social-media-logos ${device}`}>
          <div className={`icon ${device}`}>
            <a href="https://twitter.com/cea_iitm?lang=en"><img className={`logoimg ${device}`} src={X} alt="twitter" /></a>
          </div>
          <div className={`icon ${device}`}>
            <a href="https://www.facebook.com/ceaiitm/"><img className={`logoimg ${device}`} src={facebook_footer} alt="facebook"/></a>
          </div>
          <div className={`icon ${device}`}>
            <a href="https://www.instagram.com/cea_iitm/?hl=en"><img className={`logoimg ${device}`} src={instagram_footer} alt="instagram" /></a>
          </div>
          <div className={`icon ${device}`}>
            <a href="https://in.linkedin.com/company/civil-engineering-association-iit-madras"><img className={`logoimg ${device}`} src={linkedin_footer} alt="linkedin" /></a>
          </div>
          <div className={`icon ${device}`}>
            <a href="https://www.youtube.com/c/CEAIITMadras"><img className={`logoimg ${device}`} src={youtube_footer} alt="youtube" /></a>
          </div>
        </div>
        <div className={`love-ceawebops ${device}`}>
          Made with 💙 by CEA WEBOPS
        </div>
      </div>
    </div >
  );
};

export default Footer