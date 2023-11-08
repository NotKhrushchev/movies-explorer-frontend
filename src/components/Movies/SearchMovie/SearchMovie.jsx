import React from 'react';
import './SearchMovie.css';
import { resources_ru } from '../../../translations/resources_ru';
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox';
import Btn from '../../ui/buttons/Btn';

const SearchMovie = ({ setShortMoviesFilter, handleSearchMovie, setNameFilter, nameFilter, isFormDisable, isEmptyField, shortFilter }) => {

  return (
    <section className={'search-movie'}>
      <div className={'search-movie__content'}>
        <form className={'search-movie__form'} name={`search-movie-form`} onSubmit={handleSearchMovie}>
          <div className={'search-movie__input-block'}>
            <input
              value={nameFilter}
              className={'search-movie__form-input'}
              type={'text'}
              id={'search-input'} 
              name={'search-input'}
              disabled={isFormDisable}
              placeholder={resources_ru.movie}
              onChange={setNameFilter}
            />
            <Btn
              className={'search-movie__form-find-btn'}
              text={resources_ru.find}
              ariaLabel={resources_ru.find}
              disabled={isFormDisable}
              type={'submit'}
            />
          </div>
          {isEmptyField && <span className={'search-movies__err'}>{resources_ru.empty_fiel_err}</span>}
          <FilterCheckbox setShortMoviesFilter={setShortMoviesFilter} isDisabled={isFormDisable} isFilter={shortFilter} />
        </form>
      </div>
    </section>
  );
};

export default SearchMovie;