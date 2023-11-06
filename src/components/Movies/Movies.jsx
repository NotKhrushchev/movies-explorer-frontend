import React, { useCallback, useEffect, useState } from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../ui/Preloader/Preloader';
import { resources_ru } from '../../translations/resources_ru';
import LoadingContext from '../../contexts/loadingContext';
import moviesApi from '../../utils/Api/MoviesApi/MoviesApi';

const Movies = ({ savedMovies }) => {
  
  const [initMovies, setInitMovies] = useState(JSON.parse(localStorage?.initMovies || 'false'));
  const [shortFilter, setShortFilter] = useState(JSON.parse((localStorage?.shortFilter) || 'false'));
  const [nameFilter, setNameFilter] = useState(JSON.parse((localStorage?.nameFilter) || 'false') || '');
  const [isEmptyField, setEmptyFiled] = useState(false);
  const [moviesErr, setMoviesErr] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const {isLoading, setIsLoading} = React.useContext(LoadingContext);
  const [movies, setMovies] = useState([]);

  // Фильтр по короткометражкам
  const setShortMoviesFilter = useCallback((e) => {
    const isActive = e.target.checked;
    localStorage.setItem('shortFilter', isActive);
    setShortFilter(isActive);
  }, []);

  // Отслеживаю ввод в поиск по названию фильма
  const setMoviesNameFilter = useCallback((e) => {
    const search = e.target?.value;
    setNameFilter(search);
  }, []);

  // Общий фильтр по фильмам
  const filterMovies = useCallback((initMovies) => {
    if (!nameFilter) {
      setEmptyFiled(true);
      return;
    };
    setEmptyFiled(false);
    setMovies(() => {
      let filteredMovies = initMovies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(nameFilter.toLowerCase())|| movie.nameEN.toLowerCase().includes(nameFilter.toLowerCase())
      );
      if (shortFilter) {
        filteredMovies = filteredMovies.filter((movie) => movie.duration < 40);
      }
      // Если ничего не найдено - ставлю ошибку
      filteredMovies.length === 0 ? setNotFound(true) : setNotFound(false);
      return filteredMovies;
    });
    localStorage.setItem('nameFilter', JSON.stringify(nameFilter));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameFilter, shortFilter]);

  const handleSearchMovie = useCallback((e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!initMovies) {
      moviesApi.getMovies()
        .then((movies) => {
          setInitMovies(movies);
          localStorage.setItem('initMovies', JSON.stringify(movies));
          filterMovies(movies);
        })
        .catch(() => setMoviesErr(true))
        .finally(() => setIsLoading(false));
    } else {
      filterMovies(initMovies);
      setIsLoading(false);
    }
  }, [filterMovies, initMovies, setIsLoading]);

  useEffect(() => {
    initMovies && filterMovies(initMovies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortFilter]);

  useEffect(() => {
    if (initMovies && nameFilter) {
      setNotFound(false);
      filterMovies(initMovies);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={'movies'}>
      <SearchMovie 
        setShortMoviesFilter={setShortMoviesFilter}
        handleSearchMovie={handleSearchMovie}
        setNameFilter={setMoviesNameFilter}
        nameFilter={nameFilter}
        isFormDisable={isLoading}
        isEmptyField={isEmptyField}
      />
      {(movies.length !== 0 && !isLoading && !moviesErr && !notFound) ? 
          <MoviesCardList movies={movies} savedMovies={savedMovies} />
        :
        <div className={'movies__messages'}>
          {!moviesErr && !notFound ?
          isLoading && 
            <div className={'movies__preloader'}>
              <Preloader />
            </div>
          :
          <div className={'movies__error'}>
            <span className={'movies__error-text'}>
              {moviesErr ? resources_ru.requestErr : resources_ru.notFoundErr}
            </span>
          </div>
          }
        </div>
      }
    </main>
  );
};

export default React.memo(Movies);