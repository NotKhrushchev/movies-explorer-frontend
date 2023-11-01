import React, { useCallback, useEffect, useState } from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/Api/MoviesApi/MoviesApi';
import Preloader from '../ui/Preloader/Preloader';
import { resources_ru } from '../../translations/resources_ru';
import LoadingContext from '../../contexts/loadingContext';

const Movies = () => {

  const [initMovies, setInitMovies] = useState(undefined);
  const {setIsLoading} = React.useContext(LoadingContext);
  const {isLoading} = React.useContext(LoadingContext);
  const [filter, setFilter] = useState({
    isShortMoviesFilter: JSON.parse(localStorage?.isShortMoviesFilter || 'false'),
    nameFilter: ''
  });
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isErr, setErr] = useState(false);

  // Обработка чека на фильтр по короткометражкам
  const handleShortFilmsFilter = () => {
    setFilter({...filter, isShortMoviesFilter: !filter.isShortMoviesFilter});
    localStorage.setItem('isShortMoviesFilter', !filter.isShortMoviesFilter);
  };

  // При загрузке страницы загружаю фильмы
  useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => setInitMovies(movies))
      .catch((err) => {
        console.log(err);
        setErr(true);
      })
  }, []);

  // const handleSearchMovie = useCallback(() => {
  //   if (initMovies) {
  //     setFilteredMovies(initMovies.map)
  //   }
  // }, [initMovies])
  
  return (
    <main className={'movies'}>
      <SearchMovie setShortMoviesFilter={handleShortFilmsFilter} />
      {!!filteredMovies.length && !isLoading && !isErr ? 
          <MoviesCardList movies={filteredMovies} />
        :
        <div className={'movies__messages'}>
          {!isErr ?
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

export default Movies;