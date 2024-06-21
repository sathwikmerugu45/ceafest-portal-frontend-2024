import "./problemStatement.scss"
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { AuthContext } from "../../utils/authProvider";

interface ProblemstatementProps {
    problemStatementLink?: string[] | string | null,
    category: string,
    regLink: string,
    eventTitle?: string
}

const Problemstatement: React.FC<ProblemstatementProps> = ({ problemStatementLink, category, regLink, eventTitle }) => {
    const { device } = useSelector((state: RootState) => state.windowSize);
    const { user, refetch } = useContext(AuthContext)
    // console.log("problem statement link is ",problemStatementLink);
    return (
        <div className={`problem-wrapper ${device}`}>
            <div className={`problem-statement-submission ${device}`}>
                {category === "Workshop" ? <div className={`problem-form ${device}`}>
                    <p className={`problem-formp1 ${device}`}>Note</p>
                    {problemStatementLink && typeof (problemStatementLink) != "string" && problemStatementLink.map((elem) => {
                        return <p className="workshop-data">{elem}</p>
                    })}
                    {/* <p className={`probStatement ${device}`} >{problemStatementLink}</p> */}

                </div> : <div className={`problem-form ${device}`}>
                    <p className={`problem-formp1 ${device}`}>Problem Statement</p>
                    {user.payment ? problemStatementLink ? <div><p className={`probStatement ${device}`} >Problem statement link: <a className="ProbStatDriveLink" href={problemStatementLink[0]} target="_">{problemStatementLink[0]}</a> </p>
                    </div> : <div className="tdp">
                        <p className={`probStatement ${device}`}>For this event Problem statement will be given during the Event</p>
                        {eventTitle === "Concrete Challenge" && <p className={`probStatement ${device}`} >TDP link: <a href="https://drive.google.com/file/d/1m8DnxAGqrqSH1omkT6J_9oOt4ruzXE6r/view" className="ProbStatDriveLink" target="_">
                            https://drive.google.com/file/d/1m8DnxAGqrqSH1omkT6J_9oOt4ruzXE6r/view
                        </a></p>}</div> : regLink?<p className={`probStatement ${device}`}>Problem statement will be accessible within 24hrs after the registration payment is done.</p>:<p className={`probStatement ${device}`}>Online registrations for this event has been closed.</p>}
                </div>}
                {/* <input type="file" className={`filesubmission ${device}`}/> */}

                {user.payment && regLink?
                    <div className={`registerbutton ${device}`}>
                        <div className={`registrationlink ${device}`}>
                            <a href={regLink} target="_"><button className={`register-button`}>Register</button></a>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default Problemstatement;
