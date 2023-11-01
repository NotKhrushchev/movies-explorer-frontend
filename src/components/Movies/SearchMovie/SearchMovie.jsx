import React from 'react';
import './SearchMovie.css';
import { resources_ru } from '../../../translations/resources_ru';
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox';
import Btn from '../../ui/buttons/Btn';

const SearchMovie = ({ setShortMoviesFilter }) => {

  return (
    <section className={'search-movie'}>
      <div className={'search-movie__content'}>
        <form className={'search-movie__form'} name={`search-movie-form`} onSubmit={() => {}}>
          <div className={'search-movie__input-block'}>
            <input
              className={'search-movie__form-input'} 
              type={'text'}
              id={'search-input'} 
              name={'search-input'}
              placeholder={resources_ru.movie}
              required
            />
            <Btn
              className={'search-movie__form-find-btn'}
              text={resources_ru.find}
              ariaLabel={resources_ru.find}
              type={'submit'}
            />
          </div>
          <FilterCheckbox setShortMoviesFilter={setShortMoviesFilter} />
        </form>
      </div>
    </section>
  );
};

export default SearchMovie;