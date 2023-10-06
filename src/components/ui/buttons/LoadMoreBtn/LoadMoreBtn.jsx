import React from 'react';
import { resources_ru } from '../../../../translations/resources_ru';
import './LoadMoreBtn.css';

const LoadMoreBtn = () => {
  return (
    <button className='btn load-more-btn'>{resources_ru.more}</button>
  );
};

export default LoadMoreBtn;