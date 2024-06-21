import React, { useContext } from 'react';
import "./workshopPage.scss"
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import Problemstatement from '../../../components/problemStatement/problemStatement';
import { AuthContext } from '../../../utils/authProvider';
import location from "../../../assets/images/location.png"
interface WorkshopPageProps {
  eventId: Number,
  eventTitle: string,
  day: string,
  time: string,
  category: string,
  venue: string,
  rule1?: string,
  rule2?: string,
  rule3?: string,
  rule4?: string,
  rule5?: string,
  rule6?: string,
  rule7?: string,
  Eventdescription: string,
  Contentdescription?: string,
  venueLink: string,
  coordName: string,
  coordNumber: string,
  regLink: string,
}


const WorkshopPage: React.FC<WorkshopPageProps> = ({ eventId, eventTitle, day, time, category, venue, rule1, rule2, rule3, rule4, rule5, rule6, Eventdescription, Contentdescription, venueLink, coordName, coordNumber, rule7, regLink }) => {
  const { device } = useSelector((state: RootState) => state.windowSize);
  const { user, refetch } = useContext(AuthContext)
  return (
    <div className={`eventpageWrapper ${device}`}>
      <div className={`eventPage ${device}`}>
        <div className={`eventTitle ${device}`}>
          <h1 className={`eventTitleh1 ${device}`} >{eventTitle}</h1>
          <hr className={`evntTitleLine ${device}`} />
        </div>
        <div className={`eventpageCategory ${device}`}>
          <b >Category: {category}</b>
        </div>
        <div className={`venue-time ${device}`}>
          <p className={`venue-timep ${device}`}>Venue:<a href={venueLink}><img src={location} alt="" className={`location ${device}`} />{venue}</a></p>
          <p className={`venue-timep ${device}`}>Timings: {time}</p>
          <p className={`venue-timep ${device}`}>Day: {day}</p>
          {user.payment ?
            <>
              <p className={`venue-timep ${device}`}>{coordName}</p>
              <p className={`venue-timep ${device}`}>{coordNumber}</p>
            </>
            :
            null
          }
          <div className={`announcement-wrapper ${device}`}>
            <div className={`announcement ${device}`}>
              <b><p style={{color:"wheat"}}>Important Announcement :</p></b>
              <b style={{textAlign: 'justify'}} >Registrations are closed for the workshops , We'll let you know if we can have onSpot Registrations</b>
            </div>
          </div>
        </div>
        <div className={`event-wrapper ${device}`}>
          <div className={`Event-info ${device}`}>
            {/* <p className={`contentDoc ${device}`}>Refer the document here -
              <a href=" https://docs.google.com">document</a>
            </p> */}
            <p className={`Eventdescription ${device}`}>
              <div className={`Eventdescriptionh1 ${device}`}>WorkShop Description</div>
              <p className={`Eventdescriptionp ${device}`}>{Eventdescription}</p>
            </p>
          </div>
        </div>
        <div className={`rules-Regulations ${device}`}>
          <div className={`rules-wrapper ${device}`}>
            <div className={`rules-heading ${device}`}>NOTE:</div>
            <div className={`allrules ${device}`}>
              <div className={`allrulesli ${device}`}>
                {rule1 && <div className={`allruleslili ${device}`}>{rule1}</div>}
                {rule2 && <div className={`allruleslili ${device}`}>{rule2}</div>}
                {rule3 && <div className={`allruleslili ${device}`}>{rule3}</div>}
                {rule4 && <div className={`allruleslili ${device}`}>{rule4}</div>}
                {rule5 && <div className={`allruleslili ${device}`}>{rule5}</div>}
                {rule6 && <div className={`allruleslili ${device}`}>{rule6}</div>}
                {rule7 && <div className={`allruleslili ${device}`}>{rule7}</div>}
              </div>
            </div>
          </div>
        </div>
        {/* {
          user.payment ?
            <div className={`registerbutton ${device}`}>
              <div className={`registrationlink ${device}`}>
                <a href={regLink} target="_blank"><button className={`register-button`}>Register</button></a>
              </div>
            </div>
            :
            null
        } */}


      </div>

    </div>

  );
};

export default WorkshopPage;
