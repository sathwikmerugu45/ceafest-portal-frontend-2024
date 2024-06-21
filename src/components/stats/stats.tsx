
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import "./stats.scss";
import Title from "../../ui-elements/title/title"
type StatsProps = {

};
const Stats: React.FC<StatsProps> = () => {
    const [totinv, setTotinv] = useState<number>(0)
    useEffect(
        () => {
            if (totinv <3) {
                setTimeout(
                    () => {
                        setTotinv(val => val + 1)
                    },
                    15);
            }
        },
        [totinv])
    const [repinv, setRepinv] = useState<number>(0)
    useEffect(
        () => {
            if (repinv < 16) {
                setTimeout(
                    () => {
                        setRepinv(val => val + 1)
                    },
                    10);
            }
        },
        [repinv])

    const [avginv, setAvginv] = useState<number>(0)
    useEffect(
        () => {
            if (avginv < 5000) {
                setTimeout(
                    () => {
                        setAvginv(val => val + 180)
                    },
                    38);
            }
        },
        [avginv])

    const [avgret, setAvgret] = useState<number>(0)
    useEffect(
        () => {
            if (avgret < 2000) {
                setTimeout(
                    () => {
                        setAvgret(val => val + 25)
                    },
                    10);
            }
        },
        [avgret])
    const { device } = useSelector((state: RootState) => state.windowSize);

    return <div className='wrapper'>
        <div className={`container ${device}`}>
            <div className="title-wrapper" style={{height:"0%"}}>
                <Title />
            </div>
            <div className={`theme ${device}`}>
                <h1 className={`punarnavan ${device}`}>PUNARNAVAN</h1>
            </div>
            <div className={`CEA-STATS ${device}`}>
                <div className={`content1 ${device}`}>
                    <div className={`num ${device}`} data-val='3'>{totinv}</div>
                    <div className={`text ${device}`}>Days</div>
                </div>
                <div className={`content2 ${device}`}>
                    <div className={`num ${device}`} data-val='24'>{repinv}</div>
                    <div className={`text ${device}`}>Events</div>
                </div>
                <div className={`content3 ${device}`}>
                    <div className={`num ${device}`} data-val='20'>{Math.min(avginv,5000)}+</div>
                    <div className={`text ${device}`}>Social Media Followers</div>
                </div>
                <div className={`content4 ${device}`}>

                    <div className={`num ${device}`} data-val='15K'>{Math.min(avgret,2000)}+</div>
                    <div className={`text ${device}`}> Foot Fall</div>
                </div>
            </div>

        </div>
    </div>

}

export default Stats