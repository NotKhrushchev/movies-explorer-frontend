import React, { useCallback, useEffect, useState } from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import LoadingContext from '../../contexts/loadingContext';
import Preloader from '../ui/Preloader/Preloader';
import { resources_ru } from '../../translations/resources_ru';

const SavedMovies = ({ savedMovies, setSavedMovies, savedMoviesErr }) => {

  const {isLoading, setIsLoading} = React.useContext(LoadingContext);
  const [movies, setMovies] = useState(savedMovies);
  const [shortFilter, setShortFilter] = useState(false);
  const [nameFilter, setNameFilter] = useState('');
  const [notFound, setNotFound] = useState(false);

  // Фильтр по короткометражкам
  const setShortMoviesFilter = useCallback((e) => {
    const isActive = e.target.checked;
    setShortFilter(isActive);
  }, []);

  // Отслеживаю ввод в поиск по названию фильма
  const setMoviesNameFilter = useCallback((e) => {
    const search = e.target?.value;
    setNameFilter(search);
  }, []);

  // Общий фильтр по фильмам
  const filterMovies = useCallback((savedMovies) => {
    setMovies(() => {
      let filteredMovies = savedMovies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(nameFilter.toLowerCase())|| movie.nameEN.toLowerCase().includes(nameFilter.toLowerCase())
      );
      if (shortFilter) {
        filteredMovies = filteredMovies.filter((movie) => movie.duration < 40);
      }
      // Если ничего не найдено - ставлю ошибку
      filteredMovies.length === 0 ? setNotFound(true) : setNotFound(false);
      return filteredMovies;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameFilter, shortFilter]);

  const handleSearchMovie = useCallback((e) => {
    console.log('sdfsdf');
    e.preventDefault();
    setIsLoading(true);
    filterMovies(savedMovies);
    setIsLoading(false);
  }, [filterMovies, setIsLoading, savedMovies]);

  useEffect(() => {
    savedMovies && filterMovies(savedMovies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortFilter, savedMovies]);

  return (
    <div className={'movies'}>
      <SearchMovie
        setShortMoviesFilter={setShortMoviesFilter}
        handleSearchMovie={handleSearchMovie}
        setNameFilter={setMoviesNameFilter}
        nameFilter={nameFilter}
        shortFilter={shortFilter}
        isFormDisable={isLoading}
      />
      {(movies.length !== 0 && !isLoading && !savedMoviesErr && !notFound) ? 
          <MoviesCardList 
            movies={movies} 
            savedMovies={savedMovies} 
            setSavedMovies={setSavedMovies}
            isSavedMovies={true}
          />
        :
        <div className={'movies__messages'}>
          {!savedMoviesErr && !notFound ?
          isLoading && 
            <div className={'movies__preloader'}>
              <Preloader />
            </div>
          :
          <div className={'movies__error'}>
            <span className={'movies__error-text'}>
              {savedMoviesErr ? resources_ru.requestErr : resources_ru.notFoundErr}
            </span>
          </div>
          }
        </div>
      }
    </div>
  );
};

export default React.memo(SavedMovies);