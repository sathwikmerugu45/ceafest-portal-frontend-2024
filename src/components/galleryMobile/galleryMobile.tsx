import React, { useRef, useEffect } from 'react';
import "./galleryMobile.scss"


import gp1 from "../../assets/images/gp1.png"
import gp2 from "../../assets/images/gp2.png"
import gp3 from "../../assets/images/gp3.png"
import gp4 from "../../assets/images/gp4.png"
import gp5 from "../../assets/images/gp5.png"
import gp6 from "../../assets/images/gp6.png"
import gp7 from "../../assets/images/gp7.png"
import gp8 from "../../assets/images/gp8.png"
import gp9 from "../../assets/images/gp9.png"
import gp10 from "../../assets/images/gp10.png"
import gp11 from "../../assets/images/gp11.png"
import gp12 from "../../assets/images/gp12.png"
import gp13 from "../../assets/images/gp13.png"
import gp14 from "../../assets/images/gp14.png"
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
type GalleryProps = {

}

const GalleryMobile: React.FC<GalleryProps> = () => {
    const { device } = useSelector((state: RootState) => state.windowSize);
    return (
        <div className={`galleryMobile-container ${device}`}>
            <img className={`swiperSlideimageMobile ${device}`} src={gp1} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp2} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp3} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp4} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp5} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp6} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp7} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp8} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp9} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp10} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp11} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp12} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp13} alt="" />

            <img className={`swiperSlideimageMobile ${device}`} src={gp14} alt="" />
        </div>
    )
}

export default GalleryMobile;