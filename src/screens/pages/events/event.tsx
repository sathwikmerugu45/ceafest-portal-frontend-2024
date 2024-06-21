import React from 'react'
import EventCardLeft from '../../../components/eventCard/eventCardLeft'
import EventCardRight from '../../../components/eventCard/eventCardRight'
import "./event.scss"
import Footer from '../../../components/footer/footer'
import Navbar from '../../../components/navbar/navbar'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducers'
import MobileEventCard from '../../../components/mobileEventCard/mobileEventCard'
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
import etabs from "../../../assets/images/etabs.png"
import printing from "../../../assets/images/3d-printing.png"
import bim from "../../../assets/images/bim.png"
import sap2000 from "../../../assets/images/sap2000.png"


const Event: React.FC = () => {
  let eventData = [
    {
      eventTitle: "Potential Professor",
      day: "Friday",
      time: "11:00 A.M - 12:30 P.M",
      category: "Survey",
      prizeMoney: ["3000/-", "2000/-", "1000/-"],
      venue: "BSB 204",
      image: potentialProfessor
    },
    {
      eventTitle: "Aquanomics",
      day: "Friday",
      time: "2:00 P.M - 5:30 P.M",
      category: "Consulting",
      prizeMoney: ["5000/-", "3000/-", "2000/-"],
      venue: "BSB 317",
      image: Aquanomics
    },
    {
      eventTitle: "Terra Quake",
      day: "Friday",
      time: "10:30 A.M - 12:30 P.M & 2:00 P.M - 5:30 P.M",
      category: "Technical",
      prizeMoney: ["6000/-", "3000/-", "2000/-"],
      venue: "BSB Open Space",
      image: TerraQuake
    },
    {
      eventTitle: "Ideathon",
      day: "Friday",
      time: "2:00 P.M - 4:00 P.M",
      category: "Presentation",
      prizeMoney: ["5000/-", "3000/-", "1000/-"],
      venue: "VSH",
      image: Ideathon
    },
    {
      eventTitle: "Concrete Challenge",
      day: "Friday",
      time: "2:00 P.M - 4:30 P.M",
      category: "Technical",
      prizeMoney: ["6000/-", "3000/-", "2000/-"],
      venue: "MPCM Lab",
      image: ConcreteChallenge
    },

    {
      eventTitle: "FoldStruct",
      day: "Saturday",
      time: "8:30 A.M - 12:00 A.M & 1:30 P.M - 3:30 P.M",
      category: "Technical",
      prizeMoney: ["8000/-", "4000/-", "2000/-"],
      venue: "BSB 202",
      image: FoldStruct
    },
    {
      eventTitle: "Researchers Conclave",
      day: "Saturday",
      time: "1:30 P.M - 4:30 P.M",
      category: "Presentation",
      prizeMoney: ["5000/-", "3000/-", "1000/-"],
      venue: "BSB 204",
      image: ResearchConclave
    },
    {
      eventTitle: "Civil Discourse",
      day: "Saturday",
      time: "1:30 P.M - 5:00 P.M",
      category: "Debate",
      prizeMoney: ["3000/-", "2000/-", "1000/-"],
      venue: "VSH",
      image: CivilDiscourse
    },
    {
      eventTitle: "Build Scape",
      day: "Saturday",
      time: "8:00 A.M - 12:00 A.M & 1:30 P.M - 4:30 P.M",
      category: "Technical",
      prizeMoney: ["10000/-", "5000/-", "2000/-"],
      venue: "Structural Lab",
      image: BuildScape
    },
    {
      eventTitle: "Route X",
      day: "Saturday",
      time: "10:00 P.M - 6:00 A.M",
      category: "Hackathon",
      prizeMoney: ["8000/-", "4000/-", "2000/-"],
      venue: "DCF",
      image: RouteX
    },
    {
      eventTitle: "Aqua Bytes",
      day: "Saturday",
      time: "10:00 P.M - 6:00 A.M",
      category: "Hackathon",
      prizeMoney: ["5000/-", "3000/-", "1000/-"],
      venue: "BSB 202/317",
      image: Aquabytes
    },

    {
      eventTitle: "Hydro Innothon",
      day: "Sunday",
      time: "1:30 P.M - 4:30 P.M",
      category: "Product Dev",
      prizeMoney: ["3000/-", "2000/-", "1000/-"],
      venue: "BSB 202",
      image: Hydroinnothon
    },
    {
      eventTitle: "Jar Test",
      day: "Sunday",
      time: "1:30 P.M - 5:00 P.M",
      category: "Technical",
      prizeMoney: ["3000/-", "2000/-", "1000/-"],
      venue: "BSB 204",
      image: JarTest
    },
    {
      eventTitle: "Civil Consultant",
      day: "Sunday",
      time: "9:00 A.M - 12:00 P.M",
      category: "Consulting",
      prizeMoney: ["5000/-", "3000/-", "1000/-"],
      venue: "BSB 317",
      image: CivilConsultant
    },
    {
      eventTitle: "Sustainable Campuses",
      day: "Sunday",
      time: "9:00 A.M - 12:00 P.M",
      category: "Presentation",
      prizeMoney: ["6000/-", "4000/-", "2000/-"],
      venue: "VSH",
      image: SustainableCampuses
    },
    {
      eventTitle: "Bon Auto Routier",
      day: "Sunday",
      time: "1:30 P.M - 4:00 P.M",
      category: "Survey",
      prizeMoney: ["3000/-", "2000/-", "1000/-"],
      venue: "VSH",
      image: BonAutoRoutier
    },


  ]

  const WorkshopData = [
    {
      eventTitle: "Workshop 1 (Tvasta-3D Printing )",
      day: "Friday",
      time: "1:00 P.M - 6:00 P.M",
      category: "Workshop",
      prizeMoney: ["3000/-", "2000/-", "1000/-"],
      venue: "CRC",
      image: printing,
    },
    {
      eventTitle: "Workshop 2 (CSI-ETABS)",
      day: "Saturday",
      time: "9:00 A.M - 12:00 P.M",
      category: "Workshop",
      prizeMoney: ["3000/-", "2000/-", "1000/-"],
      venue: "CRC",
      image: etabs
    },
    {
      eventTitle: "Workshop 3 (CSI-SAP2000)",
      day: "Saturday",
      time: "2:00 P.M - 5:00 P.M",
      category: "Workshop",
      prizeMoney: ["3000/-", "2000/-", "1000/-"],
      venue: "CRC",
      image: sap2000
    },
    {
      eventTitle: "Workshop 4 ( Khaas Group - BIM )",
      day: "Sunday",
      time: "9:00 A.M - 1:00 P.M",
      category: "Workshop",
      prizeMoney: ["3000/-", "2000/-", "1000/-"],
      venue: "CRC",
      image: bim
    },
  ]

  const { device } = useSelector((state: RootState) => state.windowSize);

  return (
    <div className="event-page" >
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className='events-container'>
        <div className='content'>
          <div className='event-heading'>EVENTS</div>
        </div>
        {
          eventData.map((elem, id) => {
            console.log("id is ", id)
            if (id % 2 === 0) {
              return <div className='cardsside'>
                {device === "laptop" ? <EventCardLeft image={elem.image} eventTitle={elem.eventTitle} day={elem.day}
                  time={elem.time}
                  category={elem.category}
                  prizeMoney={elem.prizeMoney}
                  venue={elem.venue} eventId={id + 1} /> : <MobileEventCard image={elem.image} eventTitle={elem.eventTitle} day={elem.day}
                    time={elem.time}
                    category={elem.category}
                    prizeMoney={elem.prizeMoney}
                    venue={elem.venue} eventId={id + 1} />}

              </div>


            }
            else {
              return <div className='cardsside'>
                {device === "laptop" ? <EventCardRight image={elem.image} eventTitle={elem.eventTitle} day={elem.day}
                  time={elem.time}
                  category={elem.category}
                  prizeMoney={elem.prizeMoney}
                  venue={elem.venue} eventId={id + 1} /> : <MobileEventCard image={elem.image} eventTitle={elem.eventTitle} day={elem.day}
                    time={elem.time}
                    category={elem.category}
                    prizeMoney={elem.prizeMoney}
                    venue={elem.venue} eventId={id + 1} />}
              </div>

            }
          })
        }
      </div>
      <div className='workshops'>
        <div className='content'>
          <div className='event-heading'>WORKSHOPS</div>
        </div>
        {WorkshopData.map((elem, id) => {

          if (id % 2 === 0) {
            return <div className='cardsside'>
              {device === "laptop" ? <EventCardLeft image={elem.image} eventTitle={elem.eventTitle} day={elem.day}
                time={elem.time}
                category={elem.category}
                prizeMoney={elem.prizeMoney}
                venue={elem.venue} eventId={id + 17} /> : <MobileEventCard image={elem.image} eventTitle={elem.eventTitle} day={elem.day}
                  time={elem.time}
                  category={elem.category}
                  prizeMoney={elem.prizeMoney}
                  venue={elem.venue} eventId={id + 17} />}

            </div>


          }
          else {
            return <div className='cardsside'>
              {device === "laptop" ? <EventCardRight image={elem.image} eventTitle={elem.eventTitle} day={elem.day}
                time={elem.time}
                category={elem.category}
                prizeMoney={elem.prizeMoney}
                venue={elem.venue} eventId={id + 17} /> : <MobileEventCard image={elem.image} eventTitle={elem.eventTitle} day={elem.day}
                  time={elem.time}
                  category={elem.category}
                  prizeMoney={elem.prizeMoney}
                  venue={elem.venue} eventId={id + 17} />}

            </div>

          }
        })}

      </div>
      <Footer color="black" />
    </div>
  );
}

export default Event;