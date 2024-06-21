import React from 'react';
import './title.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const Title: React.FC = () => {
  const { device } = useSelector((state: RootState) => state.windowSize);
  return (
    <div className={`title-container ${device}`}>
      <h1 className={`title-heading ${device}`}>CEA FEST '24</h1>
    </div>
  );
};

export default Title;
