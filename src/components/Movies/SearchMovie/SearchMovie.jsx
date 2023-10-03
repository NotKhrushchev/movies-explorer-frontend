import React from 'react';
import './SearchMovie.css'
import { resources_ru } from '../../../translations/resources_ru';

const SearchMovie = () => {
  return (
    <div className={'search-movie'}>
      <div className={'search-movie__content'}>
        <form className={'form'} name={`search-movie-form`} onSubmit={() => {}}>
          <label className={'form__input-placeholder'} htmlFor={'search-input'}>
            <span className='form__input-placeholder__text'>{resources_ru.movie}</span>
          </label>
          <input className={'form__input'} type={'text'} id={'search-input'} />
        </form>
      </div>
    </div>
  );
};

export default SearchMovie;