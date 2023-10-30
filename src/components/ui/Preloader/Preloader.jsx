import React from 'react';
import './Preloader.css';

const Preloader = ({ className, isSmall }) => {

  return (
    <div className={`${className} ${!isSmall ? 'preloader' : 'preloader_small'}`}>
      <div className={!isSmall ? 'preloader__container' : 'preloader__container_small'}>
        <span className={!isSmall ? 'preloader__round' : 'preloader__round_small'}></span>
      </div>
    </div>
    );
};

export default Preloader;
