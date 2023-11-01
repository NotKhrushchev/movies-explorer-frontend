import React, { useCallback, useEffect, useState } from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../ui/Preloader/Preloader';
import { resources_ru } from '../../translations/resources_ru';
import LoadingContext from '../../contexts/loadingContext';

const Movies = ({ initMovies, initMoviesErr }) => {
  
  const {setIsLoading} = React.useContext(LoadingContext);
  const {isLoading} = React.useContext(LoadingContext);
  const [filter, setFilter] = useState({
    isShortMoviesFilter: JSON.parse(localStorage?.isShortMoviesFilter || 'false'),
    nameFilter: ''
  });
  const [movies, setMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);

  // Обработка чека на фильтр по короткометражкам
  const handleShortFilmsFilter = useCallback(() => {
    setFilter({...filter, isShortMoviesFilter: !filter.isShortMoviesFilter});
    localStorage.setItem('isShortMoviesFilter', !filter.isShortMoviesFilter);
  }, [filter]);

  useEffect(() => {
    setIsLoading(true);
    filter?.isShortMoviesFilter === true ? setShortMovies(
      movies.filter((movie) => movie.duration < 40)
    ) : setShortMovies(movies);
    setIsLoading(false);
  }, [movies, setIsLoading, filter.isShortMoviesFilter])

  // При загрузке страницы загружаю фильмы
  useEffect(() => {
    initMovies && setMovies(initMovies);
  }, [initMovies]);
  
  return (
    <main className={'movies'}>
      <SearchMovie setShortMoviesFilter={handleShortFilmsFilter} />
      {!!movies.length && !isLoading && !initMoviesErr ? 
          <MoviesCardList movies={!shortMovies.length ? movies : shortMovies} />
        :
        <div className={'movies__messages'}>
          {!initMoviesErr ?
          isLoading && 
            <div className={'movies__preloader'}>
              <Preloader />
            </div>
          :
          <div className={'movies__error'}>
            <span className={'movies__error-text'}>{resources_ru.requestErr}</span>
          </div>
          }
        </div>
      }
    </main>
  );
};

export default React.memo(Movies);