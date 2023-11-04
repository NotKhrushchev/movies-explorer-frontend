import React from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const SavedMovies = ({ movies }) => {
  
  return (
    <div className={'movies'}>
      <SearchMovie />
      <MoviesCardList movies={movies} />
    </div>
  );
};

export default React.memo(SavedMovies);