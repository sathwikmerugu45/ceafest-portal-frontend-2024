import React, { useContext } from 'react'
import './schedule.scss'
import ScheduleCard from '../../../components/schedule_card/scheduleCard'
import ScheduleCardMobile from '../../../components/schedule_card_mobile/scheduleCardMobile'
import { RootState } from '../../../redux/reducers'
import Navbar from '../../../components/navbar/navbar';
import { useSelector } from 'react-redux'

import gp1 from "../../../assets/images/gp1.png"
import labVisit from "../../../assets/images/labVisit.png"
import sustainable_quiz from "../../../assets/images/sustainable_quiz.png"
import etabs from "../../../assets/images/etabs.png"
import bim from "../../../assets/images/bim.png"
import printing from "../../../assets/images/3d-printing.png"
import sap2000 from "../../../assets/images/sap2000.png"
import potentialProfessor from "../../../assets/images/PotentialProfessor.jpeg"
import Aquanomics from "../../../assets/images/Aquanomics.jpg"
import Aquabytes from "../../../assets/images/Aquabytes .jpg"
import TerraQuake from "../../../assets/images/Terraquake.jpg"
import ConcreteChallenge from "../../../assets/images/ConcreteChallenge.jpg"
import FoldStruct from "../../../assets/images/FoldStruct.jpg"
import ResearchConclave from "../../../assets/images/ResearchersConclave.jpg"
import CivilDiscourse from "../../../assets/images/CivilDiscourse.jpg"
import BuildScape from "../../../assets/images/Buildscape .jpg"
import RouteX from "../../../assets/images/RouteX.jpg"
import Hydroinnothon from "../../../assets/images/Hydroinnothon.jpg"
import JarTest from "../../../assets/images/Jartest.jpg"
import CivilConsultant from "../../../assets/images/CivilConsultant.jpg"
import SustainableCampuses from "../../../assets/images/SustainableCampuses.jpg"
import BonAutoRoutier from "../../../assets/images/BonAutoRouter.jpg"
import Ideathon from "../../../assets/images/Ideathon.jpg"
import { AuthContext } from '../../../utils/authProvider'
type ScheduleProps = {}

const Schedule: React.FC<ScheduleProps> = () => {
    const { user, refetch } = useContext(AuthContext)
    
    const { device } = useSelector((state: RootState) => state.windowSize);


    return (
        <div className={`schedulePage ${device}`}>
            <div className={`navbar-wrapper ${device}`}>
                <Navbar />
            </div>
            <div className={`schedule-container ${device}`}>
                
                <div className={`schedule-heading ${device}`}>
                    Schedule
                </div>
                <div className={`day-detail ${device}`}>
                    <div className={`schedule-day ${device}`}>
                        Friday, March 29th
                    </div>
                </div>
                {device === 'laptop' ?
                    <>
                        <ScheduleCard image={gp1} eventName={'Fest Inagural'} time="08:00AM-10:30AM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} />
                        <ScheduleCard image={TerraQuake} eventName={'Terra Quake'} time="10:30AM-12:30PM" time1="02:00PM-05:30PM" venue={'Venue: BSB Open House'} eventCategory='Category: Technical' cordName='POC Name: Harsha' cordNumber='POC Number: 9490065436' />
                        <ScheduleCard image={potentialProfessor} eventName={'Potential Professor'} time="11:00AM-12:30PM" venue={'Venue: BSB 204'} eventCategory='Category: Survey' cordName='POC Name: Chetan' cordNumber='POC Number: 9110573986' />
                        <ScheduleCard image={Aquanomics} eventName={'Aquanomics'} time="02:00PM-05:30PM" venue={'Venue: BSB 317'} eventCategory='Category: Consulting' cordName='POC Name: Shreshta' cordNumber='POC Number: 7569148846' />
                        <ScheduleCard image={sustainable_quiz} eventName={'Sustainable Quiz & Games'} time="02:00PM-05:30PM" venue={'Venue: BSB 203'} />
                        <ScheduleCard image={Ideathon} eventName={'Ideathon'} time="02:00PM-04:00PM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} eventCategory='Category: Technical' cordName='POC Name: Sriram' cordNumber='POC Number: 8143101246' />
                        <ScheduleCard image={ConcreteChallenge} eventName={'Concrete Challenge'} time="02:00PM-04:30PM" venue={'Venue: MPCM Lab'} eventCategory='Category: Technical' cordName='POC Name: Nikhila' cordNumber='POC Number: 9014333182' />
                        <ScheduleCard image={labVisit} eventName={'Lab Visit'} time="11:00AM-02:00PM" cordName='POC Name: Anvesh' cordNumber='POC Number: 8328607055'/>
                        <ScheduleCard image={printing} eventName={"Workshop 1 ( Tvasta - 3D Printing )"} time="01:00PM-06:00PM" venue={'Venue: CRC '} eventCategory='Category: Workshop' cordName='POC Name: Sagar' cordNumber='POC Number: 8307402803' />
                    </>
                    :
                    <>
                        <ScheduleCardMobile image={gp1} eventName={'Fest Inagural'} time="08:00AM-10:30AM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} />
                        <ScheduleCardMobile image={TerraQuake} eventName={'Terra Quake'} time="10:30AM-12:30PM" time1="02:00PM-05:30PM" venue={'Venue: BSB Open House'} eventCategory='Category: Technical' cordName='POC Name: Harsha' cordNumber='POC Number: 9490065436 ' />
                        <ScheduleCardMobile image={potentialProfessor} eventName={'Potential Professor'} time="11:00AM-12:30PM" venue={'Venue: BSB 204'} eventCategory='Category: Survey' cordName='POC Name: Chetan' cordNumber='POC Number: 9110573986' />
                        <ScheduleCardMobile image={Aquanomics} eventName={'Aquanomics'} time="02:00PM-05:30PM" venue={'Venue: BSB 317'} eventCategory='Category: Consulting' cordName='POC Name: Shreshta' cordNumber='POC Number: 7569148846' />
                        <ScheduleCardMobile image={sustainable_quiz} eventName={'Sustainable Quiz & Games'} time="02:00PM-05:30PM" venue={'Venue: BSB 203'} />
                        <ScheduleCardMobile image={Ideathon} eventName={'Ideathon'} time="02:00PM-04:00PM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} eventCategory='Category: Technical' cordName='POC Name: Sriram' cordNumber='POC Number: 8143101246' />
                        <ScheduleCardMobile image={ConcreteChallenge} eventName={'Concrete Challenge'} time="02:00PM-04:30PM" venue={'Venue: MPCM Lab'} eventCategory='Category: Technical' cordName='POC Name: Nikhila' cordNumber='POC Number: 9014333182' />
                        <ScheduleCardMobile image={labVisit} eventName={'Lab Visit'} time="11:00AM-02:00PM" cordName='POC Name: Anvesh' cordNumber='POC Number: 8328607055' />
                        <ScheduleCardMobile image={printing} eventName={"Workshop 1 ( Tvasta - 3D Printing )"} time="01:00PM-06:00PM" venue={'Venue: CRC '} eventCategory='Category: Workshop' cordName='POC Name: Sagar' cordNumber='POC Number: 8307402803' />
                    </>
                }
                <div className={`day-detail ${device}`}>
                    <div className={`schedule-day ${device}`}>
                        Saturday, March 30th
                    </div>
                </div>
                {device === 'laptop' ?
                    <>
                        <ScheduleCard image={FoldStruct} eventName={'FoldStruct Workshop'} time="08:30-10:00AM" venue={'Venue: BSB 202'} eventCategory='Category: Workshop' cordName='POC Name: Akhila' cordNumber='POC Number: 9951110612'  />
                        <ScheduleCard image={FoldStruct} eventName={'FoldStruct'} time="10:00-12:00PM" time1="01:30-03:30PM" venue={'Venue: BSB 202'} eventCategory='Category: Technical' cordName='POC Name: Akhila' cordNumber='POC Number: 9951110612' />
                        <ScheduleCard image={sustainable_quiz} eventName={'Sustainable Quiz & Games'} time="09:00-12:00PM" time1="01:30-05:00PM" venue={'Venue: BSB 203'} />
                        <ScheduleCard image={BuildScape} eventName={'Build Scape'} time="08:00-12:00PM" time1="01:30-04:30PM" venue={'Venue: Structural Lab'} eventCategory='Category: Technical' cordName='POC Name: Sriram' cordNumber='POC Number: 8143101246' />
                        <ScheduleCard image={ResearchConclave} eventName={"Researcher's Conclave"} time="01:30-04:30PM" venue={'Venue: BSB 204'} eventCategory='Category: Presentation' cordName='POC Name: Anvesh' cordNumber='POC Number: 8328607055' />
                        <ScheduleCard image={CivilDiscourse} eventName={"Civil Discourse-1"} time="01:30-05:00PM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} eventCategory='Category: Debate' cordName='POC Name: Sumanth' cordNumber='POC Number: 6305659264' />
                        <ScheduleCard image={etabs} eventName={"Workshop 2 (CSI-ETABS)"} time="09:00-12:00PM" venue={'Venue: CRC '} eventCategory='Category: Workshop' cordName='POC Name: Gayathri' cordNumber='POC Number: 8977665565' />
                        <ScheduleCard image={sap2000} eventName={"Workshop 3 (CSI-SAP2000)"} time="2:00PM-05:00PM" venue={'Venue: CRC '} eventCategory='Category: Workshop' cordName='POC Name: Gayathri' cordNumber='POC Number: 8977665565' />
                        <ScheduleCard image={RouteX} eventName={"ROUTE X"} time="10:00PM-06:00AM" venue={'Venue: DCF '} eventCategory='Category: Hackathon' cordName='POC Name: Harsha' cordNumber='POC Number: 9490065436' />
                        <ScheduleCard image={Aquabytes} eventName={"Aqua Bytes"} time="10:00PM-06:00AM" venue={'Venue: BSB 202/317 '} eventCategory='Category: Hackathon' cordName='POC Name: Sriram' cordNumber='POC Number: 8143101246' />
                    </> :
                    <>
                        <ScheduleCardMobile image={FoldStruct} eventName={'FoldStruct Workshop'} time="08:30-10:00AM" venue={'Venue: BSB 202'} eventCategory='Category: Workshop' cordName='POC Name: Akhila' cordNumber='POC Number: 9951110612'  />
                        <ScheduleCardMobile image={FoldStruct} eventName={'FoldStruct'} time="10:00-12:00PM" time1="01:30-03:30PM" venue={'Venue: BSB 202'} eventCategory='Category: Technical' cordName='POC Name: Akhila' cordNumber='POC Number: 9951110612' />
                        <ScheduleCardMobile image={sustainable_quiz} eventName={'Sustainable Quiz & Games'} time="09:00-12:00PM" time1="01:30-05:00PM" venue={'Venue: BSB 203'} />
                        <ScheduleCardMobile image={BuildScape} eventName={'Build Scape'} time="08:00-12:00PM" time1="01:30-04:30PM" venue={'Venue: Structural Lab'} eventCategory='Category: Technical' cordName='POC Name: Sriram' cordNumber='POC Number: 8143101246' />
                        <ScheduleCardMobile image={ResearchConclave} eventName={"Researcher's Conclave"} time="01:30-04:30PM" venue={'Venue: BSB 204'} eventCategory='Category: Presentation' cordName='POC Name: Anvesh' cordNumber='POC Number: 8328607055' />
                        <ScheduleCardMobile image={CivilDiscourse} eventName={"Civil Discourse-1"} time="01:30-05:00PM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} eventCategory='Category: Debate' cordName='POC Name: Sumanth' cordNumber='POC Number: 6305659264' />
                        <ScheduleCardMobile image={etabs} eventName={"Workshop 2 (CSl-ETABS)"} time="09:00-12:00PM" venue={'Venue: CRC '} eventCategory='Category: Workshop' cordName='POC Name: Gayathri' cordNumber='POC Number: 8977665565' />
                        <ScheduleCardMobile image={sap2000} eventName={"Workshop 3 (CSl-SAP2000)"} time="01:30PM-05:00PM" venue={'Venue: CRC '} eventCategory='Category: Workshop' cordName='POC Name: Gayathri' cordNumber='POC Number: 8977665565' />
                        <ScheduleCardMobile image={RouteX} eventName={"ROUTE X"} time="10:00PM-06:00AM" venue={'Venue: DCF '} eventCategory='Category: Hackathon' cordName='POC Name: Harsha' cordNumber='POC Number: 9490065436' />
                        <ScheduleCardMobile image={Aquabytes} eventName={"Aqua Bytes"} time="10:00PM-06:00AM" venue={'Venue: BSB 202/317 '} eventCategory='Category: Hackathon' cordName='POC Name: Sriram' cordNumber='POC Number: 8143101246' />
                    </>

                }
                <div className={`day-detail ${device}`}>
                    <div className={`schedule-day ${device}`}>
                        Sunday, March 31st
                    </div>
                </div>
                {device==='laptop'?
                <>
                <ScheduleCard image={sustainable_quiz} eventName={'Sustainable Quiz & Games'} time="09:00AM-12:00PM" time1="01:30PM-04:30PM" venue={'Venue: BSB 203'} />
                <ScheduleCard image={CivilConsultant} eventName={'Civil Consultant'} time="09:00AM-12:00PM" venue={'Venue: BSB 317'} eventCategory='Category: Consulting' cordName='POC Name: Kuladeep' cordNumber='POC Number: 9493449133' />
                <ScheduleCard image={bim} eventName={'Workshop 4 ( Khaas Group - BIM  )'} time="09:00AM-01:00PM" venue={'Venue: CRC'} eventCategory='Category: Survey' cordName='POC Name: Gayathri' cordNumber='POC Number: 8977665565' />
                <ScheduleCard image={SustainableCampuses} eventName={'Sustainable Campuses'} time="09:00AM-12:00PM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} eventCategory='Category: Survey' cordName='POC Name: Anvesh' cordNumber='POC Number: 8328607055' />
                <ScheduleCard image={ConcreteChallenge} eventName={'Concrete Challenge'} time="10:00AM-12:00PM" venue={'Venue: MPCM Lab'} eventCategory='Category: Technical' cordName='POC Name: Nikhila' cordNumber='POC Number: 9014333182 ' />
                <ScheduleCard image={Hydroinnothon} eventName={'Hydro Innothon'} time="01:30PM-04:30PM" venue={'Venue: BSB 202'} eventCategory='Category: Product Dev' cordName='POC Name: Sumanth' cordNumber='POC Number: 6305659264' />
                <ScheduleCard image={JarTest} eventName={'Jar test Event'} time="01:30PM-05:00PM" venue={'Venue: BSB 204'} eventCategory='Category: Technical' cordName='POC Name: Sriram' cordNumber='POC Number: 8143101246' />
                <ScheduleCard image={CivilDiscourse} eventName={'Civil Discourse-2'} time="02:00PM-04:00PM" venue={'Venue: BSB 312'} eventCategory='Category: Debate' cordName='POC Name: Shreshta' cordNumber='POC Number: 7569148846' />
                <ScheduleCard image={BonAutoRoutier} eventName={'Bon Auto Routier'} time="01:30PM-04:00PM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} eventCategory='Category: Presentation' cordName='POC Name: Nikhila' cordNumber='POC Number: 9014333182' />
                </>:
                <>
                <ScheduleCardMobile image={sustainable_quiz} eventName={'Sustainable Quiz & Games'} time="09:00AM-12:00PM" time1="01:30PM-04:30PM" venue={'Venue: BSB 203'} />
                <ScheduleCardMobile image={CivilConsultant} eventName={'Civil Consultant'} time="09:00AM-12:00PM" venue={'Venue: BSB 317'} eventCategory='Category: Consulting' cordName='POC Name: Kuladeep' cordNumber='POC Number: 9493449133' />
                <ScheduleCardMobile image={bim} eventName={'Workshop 4 ( Khaas Group - BIM  )'} time="09:00AM-01:00PM" venue={'Venue: CRC'} eventCategory='Category: Survey' cordName='POC Name: Gayathri' cordNumber='POC Number: 8977665565' />
                <ScheduleCardMobile image={SustainableCampuses} eventName={'Sustainable Campuses'} time="09:00AM-12:00PM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} eventCategory='Category: Survey' cordName='POC Name: Anvesh' cordNumber='POC Number: 8328607055' />
                <ScheduleCardMobile image={ConcreteChallenge} eventName={'Concrete Challenge'} time="10:00AM-12:00PM" venue={'Venue: MPCM Lab'} eventCategory='Category: Technical' cordName='POC Name: Nikhila' cordNumber='POC Number: 9014333182' />
                <ScheduleCardMobile image={Hydroinnothon} eventName={'Hydro Innothon'} time="01:30PM-04:30PM" venue={'Venue: BSB 202'} eventCategory='Category: Product Dev' cordName='POC Name: Sumanth' cordNumber='POC Number: 6305659264' />
                <ScheduleCardMobile image={JarTest} eventName={'Jar test Event'} time="01:30PM-05:00PM" venue={'Venue: BSB 204'} eventCategory='Category: Technical' cordName='POC Name: Sriram' cordNumber='POC Number: 8143101246' />
                <ScheduleCardMobile image={CivilDiscourse} eventName={'Civil Discourse-2'} time="02:00PM-04:00PM" venue={'Venue: BSB 312'} eventCategory='Category: Debate' cordName='POC Name: Shreshta' cordNumber='POC Number: 7569148846' />
                <ScheduleCardMobile image={BonAutoRoutier} eventName={'Bon Auto Routier'} time="01:30PM-04:00PM" venue={'Venue: Viswesvarya Seminar Hall (VSH)'} eventCategory='Category: Presentation' cordName='POC Name: Nikhila' cordNumber='POC Number: 9014333182' />
                </>
                
            }
                
            </div>
        </div>
    )
}

export default Schedule;