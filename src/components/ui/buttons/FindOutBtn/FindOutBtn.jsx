import React from 'react';
import '../Btn.css';
import './FindOutBtn.css';
import { resources_ru } from '../../../../translations/resources_ru';
import NLink from '../../NLink/NLink';

const FindOutBtn = ({ addtlClass }) => {
  
  return (
    <NLink 
      wayTo={'#me'} 
      addtlClass={`${addtlClass} btn find-out-btn`}
      title={resources_ru.find_out}
    />
  );
};

export default FindOutBtn;