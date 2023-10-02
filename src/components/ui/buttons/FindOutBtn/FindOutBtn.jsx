import React from 'react';
import '../Btn.css';
import './FindOutBtn.css';
import { resources_ru } from '../../../../translations/resources_ru';

const FindOutBtn = ({ btnBEMRelate, moveTo }) => {
  
  return (
    <a href={moveTo} className={`${btnBEMRelate} btn find-out-btn`}>{resources_ru.find_out}</a>
  );
};

export default FindOutBtn;