import React, { useContext } from 'react';
import "./eventPage.scss"
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import Problemstatement from '../../../components/problemStatement/problemStatement';
import { AuthContext } from '../../../utils/authProvider';
import location from "../../../assets/images/location.png"
import first from "../../../assets/images/1st-prize.png"
import second from "../../../assets/images/2nd-place.png"
import third from "../../../assets/images/3rd-place.png"

interface EventPageProps {
  eventId: Number,
  eventTitle: string,
  day: string,
  time: string,
  category: string,
  prizeMoney: string[],
  venue: string,
  problemstatementLink?: string[] | string | null,
  Eventdescription: string,
  Contentdescription: string,
  venueLink:string,
  ruleLink:string,
  eligibility?:string,
  coordName:string,
  coordNumber:string,
  regLink:string,
  note?:string | null
}


const EventPage: React.FC<EventPageProps> = ({ eventId, eventTitle, day, time, category, prizeMoney, venue, Eventdescription, problemstatementLink,venueLink, ruleLink,eligibility, coordName, coordNumber, regLink, note }) => {
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
          <p className={`venue-timep ${device}`}>Venue:<a href={venueLink} target="_blank"><img src={location} alt="" className={`location ${device}`} />{venue}</a></p>
          <p className={`venue-timep ${device}`}>{day}</p>
          <p className={`venue-timep ${device}`}>Timings: {time}</p>
          { user.payment ?
            <>
            <p className={`venue-timep ${device}`}>{coordName}</p>
            <p className={`venue-timep ${device}`}>{coordNumber}</p>
            </>
            :
            null
          }
        </div>
          
        <div className={`event-wrapper ${device}`}>
          <div className={`Event-info ${device}`}>
            {/* <p className={`contentDoc ${device}`}>Refer the document here -
              <a href=" https://docs.google.com">document</a>
            </p> */}
            <p className={`Eventdescription ${device}`}>
            <div className={`Eventdescriptionh1 ${device}`}>Event Description</div>

              {eventTitle !== "Route X" ? <p className={`Eventdescriptionp ${device}`}>{Eventdescription}</p> : <p className={`Eventdescriptionp ${device}`}>
                Buckle up for Route X - an overnight hackathon fueled by innovation! Gearheads and code addicts are challenged in this intense event to optimize automated automobiles in SUMO simulation by employing <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://sumo.dlr.de/docs/TraCI.html&ved=2ahUKEwjz25_Zku-EAxU1yzgGHV9aDQ8QFnoECBgQAQ&usg=AOvVaw3YE_mv9iN66e5zQAQeEQKB'> Traci</a> instructions. Participants will pilot a digital fleet around a complex maze, racing against the clock to plot the sickest routes and dankest algorithms to expertly navigate the urban maze. We're revving up our engines to see ingenious solutions that balance speed and safety. Who can code a machine with eagle-eye navigation to rule the streets? Get ready to shift your skills into high gear at Route X
              </p>}

            </p>
          </div>
        </div>
        <div className={`rules-Regulationse ${device}`}>
          <div className={`rules-wrappere ${device}`}>
            <div className={`allrulese ${device}`}>
              Refer <a href={ruleLink} className={`ruleslink ${device}`} target="_blank"> here </a> for Rules and Regulations
            </div>
          </div>
        </div>
        <div className={`prize-wrapper ${device}`}>
          <div className={`prizepools ${device}`}>
            <div className={`prizenum ${device}`}>
              <div className={`prizebox ${device}`}><img src={first} alt="" className={`prizes ${device}`} />{prizeMoney[0]}</div>
            </div>
            <div className={`prizenum ${device}`}>
              <div className={`prizebox ${device}`}><img src={second} alt="" className={`prizes ${device}`} />{prizeMoney[1]}</div>
            </div>
            <div className={`prizenum ${device}`}>
              <div className={`prizebox ${device}`}><img src={third} alt="" className={`prizes ${device}`} />{prizeMoney[2]}</div>
            </div>
            <div className={`disclaimer ${device}`}>
              {note? <b><b style={{color:"red"}}>*</b>{note}</b>: null}
              
            </div>
          </div>
        </div>
        {user.payment ? 
          <>
            <Problemstatement regLink  = {regLink}problemStatementLink={problemstatementLink} category={category} eventTitle = {eventTitle} />
          </>
            :
            <Problemstatement regLink = {regLink} problemStatementLink={``} category={category}  />
        } 
      </div>

    </div>

  );
};

export default EventPage;
