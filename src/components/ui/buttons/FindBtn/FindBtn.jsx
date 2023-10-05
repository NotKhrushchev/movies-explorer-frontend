import React from 'react';
import { resources_ru } from '../../../../translations/resources_ru';
import './FindBtn.css';
import '../Btn.css';

const FindBtn = () => {

  return (
    <button className='btn find-btn'>{resources_ru.find}</button>
  );
};

export default FindBtn;