import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/Api/MoviesApi/MoviesApi';
import Preloader from '../ui/Preloader/Preloader';
import { resources_ru } from '../../translations/resources_ru';

const Movies = () => {

  const [initMovies, setInitMovies] = useState(undefined);
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(false);
  const [isShortMovies, setShortMovies] = useState(false);

  useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => setInitMovies(movies))
      .catch((err) => {
        console.log(err);
        setErr(true);
      })
  }, []);

  // Отслеживаю переключатель на короткометражки
  useEffect(() => {
    if (isShortMovies) {
      const shortMovies = initMovies.filter((movie) => movie.duration < 40);
      setMovies(shortMovies);
    } else {
      setMovies(initMovies)
    }
  }, [isShortMovies, initMovies]);
  
  return (
    <main className={'movies'}>
      {initMovies ? 
        <>
          <SearchMovie setShortMovies={setShortMovies} isShortMovies={isShortMovies} />
          <MoviesCardList movies={movies} />
        </>
        :
        <div className={'movies__messages'}>
          {!err ?
          <div className={'movies__preloader'}>
            <Preloader />
          </div>
          :
          <div className={'movies__error'}>
            <span className={'movies__error-text'}>{resources_ru.requestErr}</span>
          </div>}
        </div>
      }
    </main>
  );
};

export default Movies;