import React, { useContext } from 'react';
import "./mobileEventCard.scss"
import Foldstruct from "../../assets/images/Event1.jpg"
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { AuthContext } from '../../utils/authProvider';
interface MobileEventCardProps {
    eventTitle: string,
    day: string,
    time: string,
    category: string,
    prizeMoney: string[] | null | undefined,
    venue: string,
    eventId: Number,
    image: string
}


const MobileEventCard: React.FC<MobileEventCardProps> = ({ eventTitle, day, time, category, prizeMoney, venue, eventId, image }) => {
    const { device } = useSelector((state: RootState) => state.windowSize);
    const { user, refetch } = useContext(AuthContext)
    return (
        <div className={`eventCard ${device}`}>
            <div className="image-content-wrapper">
                <div className="image-container">

                    <div className="image">
                        <img className='eventImage' src={image} alt="" />
                    </div>
                    <div className="category">
                        <p className='eventCategory'>{category}</p>

                    </div>
                </div>
                <div className="content-container">
                    <div className="event-title-wrapper">
                        <p className="eventTitle">{eventTitle}</p>
                    </div>
                    {eventTitle == "Civil Discourse" ? <div>
                        <p className='eventTimings'>{day} {time}</p>
                        <p className='eventTimings'>{"Friday"} {"2:00 P.M - 4:00 P.M"}</p>
                    </div>
                        : eventTitle == "Concrete Challenge" ?
                            <div>
                                <p className='eventTimings'>{day} {time}</p>
                                <p className='eventTimings'>{"Sunday"} {"10:00 A.M - 12:00 P.M"}</p>
                            </div> : <p className='eventTimings'>{day} {time}</p>}

                    <p className='Venue'>Venue: {venue}</p>
                    <div className="moreDetailswrapper">
                        <button className='moreDetails'>
                            <a href={`/event/${eventId}`}>Click here for more details</a>
                        </button>
                    </div>

                </div>
                {prizeMoney && category != "Workshop" ? <div className="prizeMoney-wrapper">
                    <div className="prizeMoney">
                        <div className="prize-title">
                            PRIZE MONEY
                        </div>
                        <div className="info">
                            <p>First Place: {prizeMoney[0]}</p>
                            <p>Second Place: {prizeMoney[1]}</p>
                            <p>Third Place: {prizeMoney[2]}</p>
                        </div>
                    </div>
                </div> : <div></div>}
            </div>
        </div>
    );
};

export default MobileEventCard;