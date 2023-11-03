import React from 'react';
import { resources_ru } from '../../../translations/resources_ru';
import './FilterCheckbox.css';
import LoadingContext from '../../../contexts/loadingContext';

const FilterCheckbox = ({ setShortMoviesFilter, isDisabled }) => {

  const isFilter = JSON.parse(localStorage?.shortFilter || 'false');
  const {isLoading} = React.useContext(LoadingContext);

  return (
    <div className={'filter-checkbox'}>
      <label className={`switch ${isDisabled && 'switch_disabled'}`}>
        <input 
          type={'checkbox'} 
          id={'short-films'} 
          className={'filter-checkbox__input'}
          defaultChecked={isFilter}
          onChange={setShortMoviesFilter}
          disabled={isLoading}
        />
        <span className={'slider'}></span>
      </label>
      <label htmlFor={'short-films'} className={'filter-checkbox__label'}>{resources_ru.short_films}</label>
    </div>
  );
};

export default FilterCheckbox;