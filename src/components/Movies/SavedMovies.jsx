import React from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const SavedMovies = ({ savedMovies }) => {

  return (
    <div className={'movies'}>
      <SearchMovie />
      <MoviesCardList movies={savedMovies} isSavedMovies={true} />
    </div>
  );
};

export default React.memo(SavedMovies);