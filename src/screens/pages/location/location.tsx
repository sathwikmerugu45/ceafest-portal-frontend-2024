import React from "react";
import Navbar from '../../../components/navbar/navbar';
import locationimg from "../../../assets/images/location.png"
import './location.scss';
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";

interface LocationProps {

}

export const Location: React.FC<LocationProps> = () => {
  const { device } = useSelector((state: RootState) => state.windowSize);
  return (
    <div className={`location-container ${device}`}>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="location-wrapper-container">
        <div className={`location-wrapper ${device}`}>
          <h1 className={`location-heading ${device}`}><b>Important Locations:</b></h1>
          <div className="a-tags">
            <a href="https://maps.app.goo.gl/sF2YsqrPzYTEg2vx7" target="_" className={`location-a ${device}`}>
              <div className="location-details"><img src={locationimg} alt="" className={`location ${device}`} /> <div className="location-place">Fest area and Registration desk (BSB)</div> </div>
            </a>
          </div>

          <div className="a-tags">
            <a href="https://maps.app.goo.gl/DBJLNcHbRXfTeP8A9" target="_" className={`location-a ${device}`}>
              <div className="location-details"><img src={locationimg} alt="" className={`location ${device}`} /><div className="location-place">Boys Accommodation in Krishna Hostel</div></div>
            </a>
          </div>


          <div className="a-tags">
            <a href="https://maps.app.goo.gl/gUP6j6JLZyHGdwcd8" target="_" className={`location-a ${device}`}>
              <div className="location-details"><img src={locationimg} alt="" className={`location ${device}`} /><div className="location-place">Girls Accommodation in Sarayu Hostel</div></div>
            </a>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Location