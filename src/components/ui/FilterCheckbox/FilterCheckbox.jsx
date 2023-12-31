import React from 'react';
import { resources_ru } from '../../../translations/resources_ru';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  
  return (
    <div className={'filter-checkbox'}>
      <label className={'switch'}>
        <input type={'checkbox'} id={'short-films'} className={'filter-checkbox__input'} />
        <span className={'slider'}></span>
      </label>
      <label htmlFor={'short-films'} className={'filter-checkbox__label'}>{resources_ru.short_films}</label>
    </div>
  );
};

export default FilterCheckbox;