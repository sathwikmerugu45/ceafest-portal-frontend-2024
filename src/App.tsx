/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/pages/home/home";
import Login from "./screens/auth/login/login";
import Event from "./screens/pages/events/event";
import Footer from "./components/footer/footer";
import NewsLetter from "./screens/pages/newsletter/newsletter";
import EventForm from "./components/task/EventForm";
import GalleryPage from "./screens/pages/galleryPage/galleryPage"
import EventPage from "./screens/pages/eventPage/eventPage"
import WorkshopPage from "./screens/pages/workshopPage/workshopPage"
import Schedule from "./screens/pages/schedule/schedule";
import Profile from "./screens/pages/profile/profile";
import Inputdetails from "./screens/pages/Inputdetails/inputdetails";
import eventData from "./data/eventData";
import TeamPage from "./screens/pages/TeamPage/TeamPage";
import Location from "./screens/pages/location/location";
import Spons from "./screens/pages/spons/spons"
import { AuthContext } from "./utils/authProvider";
import ErrorPage from "./screens/pages/errorPage/errorPage";
import workshopData from "./data/workshopData";
import Users from "./screens/admin/users/users";

function App() {
  const { device } = useSelector((state: RootState) => state.windowSize);
  const { user, refetch } = useContext(AuthContext)
  console.log(device);
  
  return (
    <div className="App">
        <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/events" element={<Event/>}/>
                {/* <Route path="/newsletter" element={<NewsLetter/>}/> */}
                <Route path="/gallery" element={<GalleryPage />}/>
                <Route path="/eventform" element={<EventForm />}/>
                <Route path="/location" element={<Location />}/>
                {/* <Route path="/TeamPage" element={<TeamPage />}/> */}
                {eventData.map((elem,id)=>{
                  return <Route path={`/event/${id + 1}`} element={<EventPage eventId={id + 1} eventTitle = {elem.eventTitle} day={elem.day} time={elem.time} category={elem.category} prizeMoney={elem.prizeMoney} venue={elem.venue} problemstatementLink={elem.problemStatementLink} Eventdescription={elem.Eventdescription} Contentdescription={elem.Contentdescription} venueLink={elem.venueLink} ruleLink = {elem.ruleLink} eligibility={elem.eligibility} note={elem.note} coordName={elem.coordName} coordNumber={elem.coordNumber} regLink={elem.regLink}/>}/>
                })}
                {workshopData.map((elem,id)=>{
                  return <Route path={`/event/${id + 17}`} element={<WorkshopPage eventId={id + 17} eventTitle = {elem.eventTitle} day={elem.day} time={elem.time} category={elem.category} venue={elem.venue} rule1= {elem.rule1} rule2= {elem.rule2} rule3= {elem.rule3} rule4= {elem.rule4} rule5= {elem.rule5} rule6= {elem.rule6} rule7= {elem.rule7} Eventdescription={elem.Eventdescription} Contentdescription={elem.Contentdescription} venueLink={elem.venueLink} coordName={elem.cordName} coordNumber={elem.cordNumber} regLink={elem.regLink}/>}/>

                })}
                <Route path="/schedule" element={<Schedule/>}/>
                {
                  user.CEAFESTID !== "TESTID" ?
                  <Route path="/profile" element={<Profile />}/>
                  :
                  null
                }
                {
                  user.role === "ADMIN" ?
                  <>
                  <Route path="/input" element={<Inputdetails/>}/>
                  <Route path="/users" element={<Users/>}/>
                  </>
                  : 
                  null
                }
                  
                <Route path="*" element={<ErrorPage />}/>
                <Route path="/sponsors" element={<Spons/>}/>
              </Routes>
            </BrowserRouter>
        </div>
    </div>
  );

}
export default App;

            

