import React from 'react'
import Navbar from '../../../components/navbar/navbar'
import './about.scss'
import Container from '../../../components/container/container'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducers'

const About:React.FC = () => {

  const { device } = useSelector((state: RootState) => state.windowSize)
    
    return (
  
        <div className='about-page'>
          {/* <div className="navbar-wrapper">
            <Navbar />
          </div>        */}
          <div className={`container-wrapper ${device}`}>
              <div className={`about-box ${device}`}>
                <p  className='description-text'>
                Civil Engineering Association (CEA) is one of the largest students run organisations in India which is an amalgamation of students, scholars and faculty of Civil Engineering department, IIT Madras. Formed with the primary aim of exposing potential civil engineers to the challenges of the profession, CEA actively encourages the future engineers to celebrate the "joy of engineering". The association conducts workshops, professional events, sports events, along with social campaigns and lectures by great personalities to enhance the all-round development of students throughout the year. Along with the yearlong activities, CEA hosts annually a 3-day long CEA Fest which is a culmination of engineering competitions and workshops, serving as a launching platform for budding civil engineers from all over India.
                </p>
              </div>
          </div>        
        </div>
    )
}
export default About;