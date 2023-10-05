import React from 'react';
import './SearchMovie.css';
import { resources_ru } from '../../../translations/resources_ru';
import FindBtn from '../../ui/buttons/FindBtn/FindBtn';
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox';

const SearchMovie = () => {

  return (
    <div className={'search-movie'}>
      <div className={'search-movie__content'}>
        <form className={'form'} name={`search-movie-form`} onSubmit={() => {}}>
          <input 
            className={'form__input'} 
            type={'text'} 
            id={'search-input'} 
            placeholder={resources_ru.movie} 
          />
          <FindBtn />
        </form>
        <FilterCheckbox />
      </div>
    </div>
  );
};

export default SearchMovie;