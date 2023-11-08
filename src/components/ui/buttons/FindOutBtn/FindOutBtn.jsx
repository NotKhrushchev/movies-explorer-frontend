import React from 'react';
import '../Btn.css';
import './FindOutBtn.css';
import { resources_ru } from '../../../../translations/resources_ru';
import Link from '../../Link/Link';

const FindOutBtn = ({ className }) => {
  
  return (
    <Link 
      wayTo={'#me'} 
      className={`${className} btn find-out-btn`}
      title={resources_ru.find_out}
      isAnchorLink={true}
    />
  );
};

export default FindOutBtn;