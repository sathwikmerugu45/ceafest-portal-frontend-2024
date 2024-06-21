import React from 'react';

import './galleryPage.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import Navbar from '../../../components/navbar/navbar';
import Gallery from '../../../components/gallery/gallery';
import GalleryMobile from '../../../components/galleryMobile/galleryMobile';
type GalleryPageProps = {

}

const GalleryPage: React.FC<GalleryPageProps> = () => {

    const { device } = useSelector((state: RootState) => state.windowSize);
    return (
        <div className={`galleryPage-container ${device}`}>
             <div className="navbar-wrapper">
                <Navbar />
            </div>
            {device === "laptop" ?
                <>
                    <Gallery/>
                </>
                :
                <>
                   <GalleryMobile/>
                </>
            }
        </div>
    )
}

export default GalleryPage;