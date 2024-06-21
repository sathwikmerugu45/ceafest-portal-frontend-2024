import React, { useState } from 'react';
import csi from "../../../assets/images/csi-logo.png"
import LandT from "../../../assets/images/l&t.jpg"
import khaas from "../../../assets/images/khaas.png"
import Navbar from '../../../components/navbar/navbar';
import tvasta from "../../../assets/images/Tvasta.png"
import "./spons.scss"
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import educational_partner from "../../../assets/images/educational_partner.png"
import gaming_partner from "../../../assets/images/gaming.jpg"
interface SponsProps {
    //   title: string;
}

const Spons: React.FC<SponsProps> = ({ }) => {
    const { device } = useSelector((state: RootState) => state.windowSize);
    return (
        <div>
            <Navbar />
            <div className={`spons-page ${device}`}>
                <div className={`spons-title ${device}`}>
                    SPONSORS 2023-2024
                </div>
                <div className={`sponsors ${device}`}>
                    <div className={`landt ${device}`}>
                        <p className={`spons-name ${device}`}>GOLD SPONSOR</p>
                        <img className={`image ${device}`} src={LandT} alt="" />
                    </div>
                    <div className="workshop-sponsors">
                        <p className={`spons-name ${device}`}>WORKSHOP SPONSOR</p>
                        <div className={`workshop-sponsors-wrapper ${device}`}>
                            <div className={`csi ${device}`}>
                                <img className={`image ${device}`} src={csi} alt="" />
                            </div>
                            <div className={`tvasta ${device}`}>
                                <img className={`image ${device}`} src={tvasta} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={`khaas ${device}`}>
                        <p className={`spons-name ${device}`}>WORKSHOP PARTNER</p>
                        <img className={`image ${device}`} src={khaas} alt="" />
                    </div>
                    <div className={`khaas ${device}`}>
                        <p className={`spons-name ${device}`}>EDUCATIONAL PARTNER</p>
                        <img className={`image ${device}`} src={educational_partner} alt="" />
                    </div>
                    <div className={`khaas ${device}`}>
                        <p className={`spons-name ${device}`}>GAMING PARTNER</p>
                        <img className={`image ${device}`} src={gaming_partner} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Spons;
