import React from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const SavedMovies = ({ savedMovies, setSavedMovies }) => {

  return (
    <div className={'movies'}>
      <SearchMovie />
      <MoviesCardList movies={savedMovies} setSavedMovies={setSavedMovies} isSavedMovies={true} />
    </div>
  );
};

export default React.memo(SavedMovies);