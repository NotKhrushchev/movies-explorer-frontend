import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../ui/Preloader/Preloader';
import { resources_ru } from '../../translations/resources_ru';
import LoadingContext from '../../contexts/loadingContext';

const Movies = ({ initMovies, isMoviesErr }) => {
  
  // Использую useRef для предотвращения лишних рендеров
  const nameFilterRef = useRef(undefined);
  const {setIsLoading} = React.useContext(LoadingContext);
  const [isNotFound, setNotFound] = useState(false);
  const {isLoading} = React.useContext(LoadingContext);
  const [isShortFilter, setShortFilter] = useState(JSON.parse(localStorage?.isShortFilter || 'false'));
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);

  // Обработка чека на фильтр по короткометражкам
  const handleShortFilmsFilter = useCallback(() => {
    setShortFilter(!isShortFilter);
    localStorage.setItem('isShortFilter', !isShortFilter);
  }, [isShortFilter]);
  useEffect(() => {
    setIsLoading(true);
    isShortFilter === true ? setShortMovies(
      filteredMovies.filter((movie) => movie.duration < 40)
    ) : setShortMovies([]);
    setIsLoading(false);
  }, [filteredMovies, setIsLoading, isShortFilter]);

  // Обработка ввода в форму поиска по названию
  const handleSearchMovie = useCallback((e) => {
    e.preventDefault();
    setIsLoading(true);
    const nameFilter = nameFilterRef.current.value.toLowerCase();
    localStorage.setItem('nameFilter', nameFilter);
    setFilteredMovies(
      initMovies.filter((movie) => movie.nameRU.toLowerCase().includes(nameFilter))
    )
    setIsLoading(true);

  }, [initMovies, isShortFilter, setIsLoading]);

  // useEffect(() => {
  //   filteredMovies ? localStorage.setItem('filteredMovies', filteredMovies) : setNotFound(true);
  // }, [filteredMovies])

  return (
    <main className={'movies'}>
      <SearchMovie 
        setShortMoviesFilter={handleShortFilmsFilter}
        handleSearchMovie={handleSearchMovie}
        nameFilterRef={nameFilterRef}
        isMoviesErr={isMoviesErr}
        isFormDisable={!initMovies.length}
      />
      {!!filteredMovies.length && !isLoading && !isMoviesErr ? 
          <MoviesCardList movies={!shortMovies.length ? filteredMovies : shortMovies} />
        :
        <div className={'movies__messages'}>
          {!isMoviesErr && !isNotFound ?
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