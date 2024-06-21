import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import rightArrow from "../../assets/images/right-arrow.png"
import profile from "../../assets/icons/profileBlack.svg"
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../utils/authProvider";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Navbar: React.FC = () => {
  const location = useLocation()
  const {user, refetch} = useContext(AuthContext)
  const [ isDropdownVisible, setDropdownVisible ] = useState<boolean>(false)
  const handleMouseOver = () => {
    setDropdownVisible(true)
  }
  const handleMouseLeave = () => {
    setDropdownVisible(false)
  }
  const { device } = useSelector((state: RootState) => state.windowSize);

  useEffect(() => {
    const navbarHamburger = document.querySelector(".navbar-hamburger");
    const navbarMenu = document.querySelector(".navbar-menu");

    const toggleMenu = () => {
      navbarHamburger?.classList.toggle("active");
      navbarMenu?.classList.toggle("active");
    };

    const closeMenu = () => {
      toggleMenu();
    };

    navbarHamburger?.addEventListener("click", toggleMenu);

    document.querySelectorAll(".navbar-link").forEach((n) =>
      n.addEventListener("click", closeMenu)
    );

    return () => {
      navbarHamburger?.removeEventListener("click", toggleMenu);
      document.querySelectorAll(".navbar-link").forEach((n) =>
        n.removeEventListener("click", closeMenu)
      );
    };
  }, []);

  return (
    <div className={`navbar-container ${device}`}>
      <header>
        <nav className={`navbar-navbar ${device}`}>
          <ul className={`navbar-logos ${device}`}>
            <img 
              src="https://home.iitm.ac.in/paragr/iitmLogo.png"
              alt="IITM logo"
              className={`images ${device}`}
            />
            <img
              src="https://civil.iitm.ac.in/cea/images/logo.png"
              alt="CEA logo"
              className={`images ${device}`}
            />
          </ul>

          <ul className={`navbar-menu ${device}`}>
            <li className={`navbar-item ${device}`}>
              <a href="/" className={`navbar-link ${device}`}>
                Home
              </a>
            </li>
            <li className={`navbar-item ${device}`}>
              <a href="/events" className={`navbar-link ${device}`}>
                Events & Workshops
              </a>
            </li>
            
            <li className={`navbar-item ${device}`}>
              <a href="gallery" className={`navbar-link ${device}`}>
                Gallery
              </a>
            </li>    
            { user.role === "ADMIN" ?  
              <>
                <li className="navbar-item">
                  <a href="/input" className="navbar-link">
                    Inputdetails
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/users" className="navbar-link">
                    Users
                  </a>
                </li>
              </> 
              :
              null
            } 
            
            <li className={`navbar-item ${device}`}>
              <a href="/schedule" className={`navbar-link ${device}`}>
                Schedule
              </a>
            </li>
            <li className={`navbar-item ${device}`}>
              <a href="/location" className={`navbar-link ${device}`}>
                Location
              </a>
            </li>
            {/* <li className={`navbar-item ${device}`}>
              <a href="/TeamPage" className={`navbar-link ${device}`}>
                TeamPage
              </a>
            </li> */}
            <li className={`navbar-item ${device}`}>
              <a href="/sponsors" className={`navbar-link ${device}`}>
                Sponsors
              </a>
            </li>
            
          </ul>
          {
            user.CEAFESTID === "TESTID" ?
              <div className={`register ${device}`}>
                    <Link to={"/login"} >
                <div className={`button-container ${device}`}>
                  <a href="#" className={`navbar-register ${device}`}>
                      Login
                  </a>
                </div>
                    </Link>
              </div> 
              : 
                <div 
                  className={`profile ${device}`}
                >
                  <Link to={"/profile"} >
                    <img src={profile} alt="profile.jpg" />
                  </Link>
                </div>
            }


          <div className={`navbar-hamburger ${device}`}>
            <span className={`navbar-bar ${device}`}></span>
            <span className={`navbar-bar ${device}`}></span>
            <span className={`navbar-bar ${device}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar