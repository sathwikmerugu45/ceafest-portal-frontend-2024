import React from 'react';
import "./eventCardLeft.scss"
interface EventCardProps {
  eventTitle: string,
  day: string,
  time: string,
  category: string,
  prizeMoney: string[] | null | undefined,
  venue: string,
  eventId: Number,
  image: string,
}

const EventCardLeft: React.FC<EventCardProps> = ({ eventTitle, day, time, category, prizeMoney, venue, eventId, image }) => {
  return (
    <div className="eventCard">
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
            <a href={`/event/${eventId}`}>
              <button className='moreDetails'>
                Click here for more details
              </button>
            </a>
          </div>
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
  );
};

export default EventCardLeft;