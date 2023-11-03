import React from 'react';
import './SearchMovie.css';
import { resources_ru } from '../../../translations/resources_ru';
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox';
import Btn from '../../ui/buttons/Btn';

const SearchMovie = ({ setShortMoviesFilter, handleSearchMovie, setNameFilter, nameFilter, isFormDisable }) => {
  console.log(nameFilter);

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
          <FilterCheckbox setShortMoviesFilter={setShortMoviesFilter} isDisabled={isFormDisable}/>
        </form>
      </div>
    </section>
  );
};

export default SearchMovie;