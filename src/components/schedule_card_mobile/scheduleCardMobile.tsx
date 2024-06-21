import React, { useContext } from 'react';
import "./scheduleCardMobile.scss"
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
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

const ScheduleCardMobile: React.FC<ScheduleCardProps> = ({
  time,
  time1,
  venue,
  eventName,
  cordName,
  cordNumber,
  image,
  eventCategory,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { device } = useSelector((state: RootState) => state.windowSize);
  const { user, refetch } = useContext(AuthContext)
  return (
    <div className={`scheduleCardMobile-container ${device}`}>
      <div className={`mobilehovering-container ${device}`}>
        <div className={`scheduledCardMobile-part2 ${device}`}>
          <img src={image} alt="" className={`scheduledCardMobile-image ${device}`} />
        </div>
        <div className={`scheduledCardMobile-part3 ${device}`}>
          <div className={`scheduledCardMobile-eventName ${device}`}>
            {eventName}
          </div>

          <div className={`scheduledCardMobile-eventCategory ${device}`}>
            {eventCategory}
          </div>
          <div className={`scheduledCardMobile-eventVenue ${device}`}>
            {venue}
          </div>
          {
            user.payment ?
              <>
                <div className={`scheduledCardMobile-cordName ${device}`}>
                  {cordName}
                </div>
                <div className={`scheduledCardMobile-cordNumber ${device}`}>
                  {cordNumber}
                </div>
              </>
              :
              null
          }
          <div className={`scheduledCardMobile-timing ${device}`} >
            <div>{time}</div>
            <div>{time1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCardMobile;