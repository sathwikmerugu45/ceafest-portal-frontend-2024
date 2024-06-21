import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './gallery.scss';

import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

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
import Navbar from '../../components/navbar/navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

type GallerypageProps = {

}

interface SwiperRefWithMethods {
    autoplay: any;
    slidePrev: () => void;
    slideNext: () => void;
}
const Gallery: React.FC<GallerypageProps> = () => {
    const swiperRef = useRef<SwiperRefWithMethods | null>(null);
    
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    }, [swiperRef]);
    
    // const handlePrev = () => {
    //     if (swiperRef.current) {
    //         swiperRef.current.slidePrev();
    //     }
    // };
      
    //   const handleNext = () => {
    //     if (swiperRef.current) {
    //       swiperRef.current.slideNext();
    //     }
    //   };
    const { device } = useSelector((state: RootState) => state.windowSize);
    return (
        <div className={`gallery-container ${device}`}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 15,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                // navigation={{
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // }}
                modules={[EffectCoverflow, Navigation, Autoplay]}
                className={`mySwiper ${device}`}
                keyboard={{ enabled: true, onlyInViewport: false }}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                spaceBetween={10}
                speed={1000}
            >
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`} src={gp1} alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    <img className={`swiperSlideimage ${device}`}  src={gp2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp9} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp10} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp11} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp12} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp13} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={`swiperSlideimage ${device}`}  src={gp14} alt="" />
                </SwiperSlide>


            </Swiper>
            {/* <div className="swiper-button-next" onClick={handleNext}></div>
            <div className="swiper-button-prev" onClick={handlePrev}></div> */}
        </div>
    )
}

export default Gallery;