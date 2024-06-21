import React, { useContext, useState } from "react";
import "./profile.scss"
import { AuthContext } from "../../../utils/authProvider";
import { useLogOutUserMutation } from "../../../generated/graphql";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
interface ProfileProps {
}

const Profile: React.FC<ProfileProps> = ({
}) => {
  const navigate = useNavigate()
  const [logOutUserMutation, { data, loading, error }] = useLogOutUserMutation();
  const { user, refetch } = useContext(AuthContext);
  const [buttonText, setButtonText] = useState('Edit Profile');

  // const handleEditClick = () => {
  //   setButtonText(buttonText === 'Edit Profile' ? 'Save Profile' : 'Edit Profile');
  // };
  const { device } = useSelector((state: RootState) => state.windowSize);
  return (
    <div>
      <Navbar />
      <div className={`profile-page ${device}`}>
        <div className={`user-profile-card ${device}`}>
          {/* {photoUrl && (
        <img src={photoUrl} alt="Profile picture" className="profile-picture" />
      )} */}
          <div className={`profile-heading ${device}`}>
            Profile
          </div>
          <div className={`user-info-wrapper ${device}`}>
            <div className={`user-info ${device}`}>
              <p className={`userinfop ${device}`}>Name: {user.name}</p>
              <p className={`user-id ${device}`}>{`CEA Fest ID: ${user.CEAFESTID}`}</p>
              <p className={`userinfop ${device}`}>
                {/* <b>Contact:</b> */}
                Email: {user.email}
              </p>
              <p className={`userinfop ${device}`}>
                Phone: {user.mobile}
              </p>
              {
                !user.isIITM ? 

                // <a href="https://code.iitm.ac.in/code-programs/CEA2024/">
                //   <div className="payment-link">
                //     PAYMENT LINK(*Use same Mail Id for payment also)
                //   </div>
                // </a>
                null
                : 

                <a href="https://rzp.io/l/ceamembershipfee">
                  <div className="payment-link">
                     MEMBERSHIP FEE
                  </div>
                </a>

              }

            </div>
          </div>
          {/* <button className={`editButton ${device}`} onClick={handleEditClick}>
            {buttonText}
          </button> */}
        </div>

        {
          !user.isIITM ? 

          <div className={`disclaimer ${device}`}>
            <b><b style={{color:"red"}}>*</b>Note For Participants: </b>
            CEA is no more accepting online payments. Onspot payments are available. 
            {/* <b style={{color:"red"}}>Workshop Registrations are Closed</b> */}
          </div>
          // null
          :
          <div className={`disclaimer ${device}`}>
            <b><b style={{color:"red"}}>*</b>Note For IITM Participants: </b>
            The participants who have paid membership fees will have access to event registration in 24hrs & Who hasn't paid the membership fee pay the membership and become a CEA member.Please check 
            <a href="https://docs.google.com/spreadsheets/d/1bczWOOpEibInEng5EZKAEwyE7G_8UGTyPwEcG17pdJs/edit?usp=sharing"> CEA Members List.  </a> 
          </div>

        }
        
        <button className={`logout ${device}`}
          onClick={async () => {
            await logOutUserMutation();
            navigate("/")
            window.location.reload()

          }}
        >
          LOGOUT
        </button>
      </div>

    </div >

  );
};

export default Profile;
