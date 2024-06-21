import React from 'react';
import './TeamPage.scss';
import shivaram from "../../../assets/images/shivaram.jpg"
import venkat from"../../../assets/images/venkat.jpg"
import satya from"../../../assets/images/satya.jpg"
import sagar from"../../../assets/images/sagar.jpg"
import vishnu_sai from "../../../assets/images/vishnu_sai.jpg"
import navya from"../../../assets/images/navya.jpg"
import likhitha from"../../../assets/images/likhitha.jpg"
import kowshik from"../../../assets/images/kowshik.jpg"
import keerthan from"../../../assets/images/keerthan.jpg"
import gayathri from"../../../assets/images/gayathri.jpg"
import eswari from"../../../assets/images/eswari.jpg"
import chethan from"../../../assets/images/chethan.jpg"
import bharath from"../../../assets/images/bharath.jpg"
import ashrith from"../../../assets/images/ashrith.jpg"
import anvesh from"../../../assets/images/anvesh.jpg"
import Tharun from"../../../assets/images/Tharun.jpg"
import koti from"../../../assets/images/koti.jpeg"
import charan from"../../../assets/images/charan.jpeg"
import santhan from"../../../assets/images/santhan.jpeg"
import youtube_footer from "../../assets/images/youtube_footer.png"
import facebook_footer from "../../assets/images/facebook_footer.png"
import linkedin_footer from "../../assets/images/linkedin_footer.png"
import instagram_footer from "../../assets/images/instagram_footer.png"
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
const TeamPage: React.FC = () => {
    const teamMembers = [
        { id: 1, name: 'Santhan', position: 'Secretary', role: 'Secretaries of CEA', imageUrl: santhan },
        { id: 2, name: 'Charan kumar', position: 'Secretary', role: 'Secretaries of CEA', imageUrl: charan },
        { id: 3, name: 'Abhiram koti', position: 'Secretary', role: 'Secretaries of CEA', imageUrl:koti },
        { id: 4, name: 'Shivaram', position: 'Core', role: 'Webops', imageUrl:shivaram},
        { id: 5, name: 'Tharun', position: 'Core', role: 'Webops', imageUrl: Tharun },
        { id: 6, name: 'Vishnu Chetan', position: 'Core', role: 'Events', imageUrl: chethan},
        { id: 7, name: 'Eswari', position: 'Core', role: 'Events', imageUrl: eswari},
        { id: 8, name: 'Anvesh', position: 'Core', role: 'Events', imageUrl: anvesh },
        { id: 9, name: 'Keerthan', position: 'Core', role: 'DNSR', imageUrl:keerthan },
        { id: 10, name: 'Sathya', position: 'Core', role: 'DNSR', imageUrl: satya },
        { id: 11, name: 'Ashrith', position: 'Core', role: 'Finops', imageUrl:ashrith },
        { id: 12, name: 'Navya', position: 'Core', role: 'Finops', imageUrl: navya },
        { id: 13, name: 'Bharath', position: 'Core', role: 'Finops', imageUrl: bharath },
        { id: 14, name: 'Vishnu Sai', position: 'Core', role: 'DAM', imageUrl: vishnu_sai },
        { id: 15, name: 'Likitha', position: 'Core', role: 'DAM', imageUrl:likhitha },
        { id: 16, name: 'Venkat', position: 'Core', role: 'DAM', imageUrl: venkat },
        { id: 17, name: 'Sagar', position: 'Core', role: 'SPONS', imageUrl: sagar },
        { id: 18, name: 'Gayathri', position: 'Core', role: 'SPONS', imageUrl: gayathri },
        { id: 19, name: 'Kowshik', position: 'Core', role: 'QMS', imageUrl: kowshik },
    ];
    const groupedTeamMembers: { [key: string]: any[] } = {};
    teamMembers.forEach(member => {
        if (!groupedTeamMembers[member.role]) {
            groupedTeamMembers[member.role] = [];
        }
        groupedTeamMembers[member.role].push(member);
    });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { device } = useSelector((state: RootState) => state.windowSize);

    return (
        <div className={`team-page ${device}`}>
            <div className={`ourteam ${device}`}>
                OUR TEAM
                <hr />
            </div>
            {Object.keys(groupedTeamMembers).map(role => (
                <div key={role} className={`team-section ${device} ${role.toLowerCase()}-section`}>
                    <div className={`role ${device}`}>{role} <hr /></div>
                    <div className={`team-cards ${device}`}>
                        {groupedTeamMembers[role].map(member => (
                            <div key={member.id} className={`team-card ${device}`}>
                                <div className={`circular-card ${device}`}>
                                    <img src={member.imageUrl} alt={member.name} />
                                    <div className={`member-info ${device}`}>
                                        {/* <h2>{member.name}</h2>
                                        <p className="role">{member.position}</p> */}
                                    </div>
                                </div>
                                <div className={`extra-details ${device}`}>
                                   <p>{member.name}</p>
                                    {/* <p>{member.position}</p>
                                    <p>{member.role}</p> */}
                                {/* </div>
                                <div className="hover-card"> */}
                                    {/* <p>{member.name}</p>
                                    <p>{member.position}</p>
                                    <p>{member.role}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
           </div>
        
        
    );
}

export default TeamPage;