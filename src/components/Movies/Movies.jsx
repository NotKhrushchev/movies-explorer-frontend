import React, { useCallback, useState } from 'react';
import './Movies.css';
import SearchMovie from './SearchMovie/SearchMovie';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../ui/Preloader/Preloader';
import { resources_ru } from '../../translations/resources_ru';
import LoadingContext from '../../contexts/loadingContext';

const Movies = ({ initMovies, isMoviesErr }) => {
  
  const [nameFilter, setNameFilter] = useState('');
  const [shortFilter, setShortFilter] = useState(JSON.parse(localStorage?.isShortFilter || 'false'));
  const [isNotFound, setNotFound] = useState(false);
  const {isLoading, setIsLoading} = React.useContext(LoadingContext);
  const [movies, setMovies] = useState(initMovies);
  const [shortMovies, setShortMovies] = useState(null);

  // Фильтр по короткометражкам
  const setShortMoviesFilter = useCallback((e) => {
    const isActive = e.target.checked;
    localStorage.setItem('shortFilter', isActive);
    setShortFilter(isActive)
    if (isActive) {
      setShortMovies(movies.filter((movie) => movie?.duration < 40));
    } else {
      setShortMovies(null);
    };
  }, [movies]);

  // Отслеживаю ввод в поиск по названию фильма
  const setMoviesNameFilter = useCallback((e) => {
    const search = e.target?.value
    setNameFilter(search)
  }, [])

  const handleSearchMovie = (e) => {
    e.preventDefault();
    setMovies((movies) => movies.filter())
  };

  return (
    <main className={'movies'}>
      <SearchMovie 
        setShortMoviesFilter={setShortMoviesFilter}
        handleSearchMovie={() => {}}
        setNameFilter={setMoviesNameFilter}
        nameFilter={nameFilter}
        isFormDisable={!initMovies.length || isLoading}
      />
      {(movies.length !== 0 && !isLoading && !isMoviesErr && !isNotFound) ? 
          <MoviesCardList movies={shortMovies || movies} />
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