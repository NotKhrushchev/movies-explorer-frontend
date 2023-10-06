import React from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = () => {
  
  return (
    <div className={'movies'}>
      <SearchMovie />
      <MoviesCardList />
    </div>
  );
};

export default Movies;