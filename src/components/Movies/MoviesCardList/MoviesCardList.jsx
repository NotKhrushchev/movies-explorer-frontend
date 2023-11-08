import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import Btn from '../../ui/buttons/Btn';
import { resources_ru } from '../../../translations/resources_ru';
import { getMoviesShowParam } from '../../../utils/functions/expandMoviesShow';
import mainApi from '../../../utils/Api/MainApi/MainApi';
import { screenWidth } from '../../../utils/constants';

const MoviesCardList = ({ movies, savedMovies, setSavedMovies, isSavedMovies }) => {

  const [count, setCount] = useState(0);
  const slicedMovies = movies.slice(0, count);

  // Определяю параметры пагинации фильмов
  useEffect(() => {
    if (!isSavedMovies) {
      setCount(getMoviesShowParam().initRows);
      const handleResize = () => {
        if (window.innerWidth >= screenWidth.max) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < screenWidth.max) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < screenWidth.beforeMax) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < screenWidth.medium) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < screenWidth.small) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < screenWidth.smallest) {
          setCount(getMoviesShowParam().initRows);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    };
  }, [isSavedMovies, movies]);

  // Отобразить больше фильмов
  const handleShowMore = () => {
    setCount((state) => state + getMoviesShowParam().step);
  };

  // Добавить фильм в сохраненные
  const saveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then((movie) => setSavedMovies([...savedMovies, movie]))
      .catch((err) => console.log(err))
  };

  const removeMovieFromSaved = (movie) => {
    const movieId = movie.id || movie.movieId;
    mainApi.removeFromSaved(movie.id ? movie.id : movie.movieId)
      .then(() => setSavedMovies((savedMovies) => savedMovies.filter((savedMovie) => savedMovie.movieId !== movieId)))
      .catch((err) => console.log(err))
  };
  console.log(slicedMovies, movies);

  return (
    <section className={'movies-card-list'}>
      <ul className={'movies-card-list__movies'}>
        {(slicedMovies.length > 0 && !isSavedMovies) ? 
        slicedMovies.map((movie) => (
          <MovieCard 
            key={movie._id} 
            movie={movie} 
            onMovieBtnClick={{
              saveMovie,
              removeMovieFromSaved
            }} 
            savedMovies={savedMovies}
          />
        )) : 
        movies.map((movie) => (
          <MovieCard 
            key={movie._id} 
            movie={movie} 
            onMovieBtnClick={{removeMovieFromSaved}} 
          />
        ))
        }
      </ul>
      {(!isSavedMovies && slicedMovies.length !== movies.length) && 
        <div className={'movies-card-list__loader'}>
          <Btn
            className={'movies-card-list__load-more-btn'}
            text={resources_ru.more}
            onClick={handleShowMore}
          />
        </div>}
    </section>
  );
};

export default MoviesCardList;