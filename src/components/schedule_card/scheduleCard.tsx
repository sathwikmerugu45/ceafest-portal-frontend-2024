import React, { useContext } from 'react';
import "./scheduleCard.scss"
import { AuthContext } from '../../utils/authProvider';
interface ScheduleCardProps {
  time?: string;
  time1?: string;
  venue?: string;
  eventName: string;
  cordName?: string;
  cordNumber?: string;
  image: string,
  eventCategory?: string,
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  time,
  time1,
  venue,
  eventName,
  cordName,
  cordNumber,
  image,
  eventCategory,
}) => {
  const { user, refetch } = useContext(AuthContext)
  return (
    <div className="scheduleCard-container">
      <div className="hovering-container">
        <div className="scheduledCard-part1">
          <div className="scheduledCard-timing" >
            <div>{time}</div>
            <div>{time1}</div>
          </div>
        </div>
        <div className="scheduledCard-part2">
          <img src={image} alt="" className="scheduledCard-image" />
        </div>
        <div className="scheduledCard-part3">
          <div className="scheduledCard-eventName">
            {eventName}
          </div>

          <div className="scheduledCard-eventCategory">
            {eventCategory}
          </div>
          <div className="scheduledCard-eventVenue">
            {venue}
          </div>
          {
            user.payment ?
            <>
              <div className="scheduledCard-cordName">
                {cordName}
              </div>
              <div className="scheduledCard-cordNumber">
                {cordNumber}
              </div>
            </>
            :
            null
          }
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
