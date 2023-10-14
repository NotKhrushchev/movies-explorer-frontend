import React from 'react';
import './SearchMovie.css';
import { resources_ru } from '../../../translations/resources_ru';
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox';
import Btn from '../../ui/buttons/Btn';

const SearchMovie = () => {

  return (
    <section className={'search-movie'}>
      <div className={'search-movie__content'}>
        <form className={'search-movie__form'} name={`search-movie-form`} onSubmit={() => {}}>
          <input
            className={'search-movie__form-input'} 
            type={'text'}
            id={'search-input'} 
            name={'search-input'}
            placeholder={resources_ru.movie} 
          />
          <Btn
            addtlClass={'search-movie__form-find-btn'}
            text={resources_ru.find}
            ariaLabel={resources_ru.find}
            type={'submit'}
          />
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
};

export default SearchMovie;