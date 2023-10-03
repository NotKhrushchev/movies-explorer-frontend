import React from 'react';
import './Movies.css'
import SearchMovie from './SearchMovie/SearchMovie';

const Movies = () => {
  return (
    <div className={'movies'}>
      <SearchMovie />
    </div>
  );
};

export default Movies;