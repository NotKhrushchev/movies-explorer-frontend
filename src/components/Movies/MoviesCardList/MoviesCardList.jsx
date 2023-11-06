import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import Btn from '../../ui/buttons/Btn';
import { resources_ru } from '../../../translations/resources_ru';
import { getMoviesShowParam } from '../../../utils/functions/expandMoviesShow';
import mainApi from '../../../utils/Api/MainApi/MainApi';

const MoviesCardList = ({ movies, savedMovies, isSavedMovies }) => {

  const [count, setCount] = useState(0);
  const slicedMovies = movies.slice(0, count);

  // Определяю параметры пагинации фильмов
  useEffect(() => {
    if (!isSavedMovies) {
      setCount(getMoviesShowParam().initRows);
      const handleResize = () => {
        if (window.innerWidth >= 1860) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < 1860) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < 1570) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < 1280) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < 990) {
          setCount(getMoviesShowParam().initRows);
        } else if (window.innerWidth < 768) {
          setCount(getMoviesShowParam().initRows);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    };
  }, [isSavedMovies]);

  // Отобразить больше фильмов
  const handleShowMore = () => {
    setCount((state) => state + getMoviesShowParam().step);
  };

  // Добавиль фильм в сохраненные
  const saveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  };

  return (
    <section className={'movies-card-list'}>
      <ul className={'movies-card-list__movies'}>
        {(slicedMovies.length > 0 && !isSavedMovies) ? 
        slicedMovies.map((movie, index) => (
          <MovieCard 
            key={index} 
            movie={movie} 
            onMovieBtnClick={saveMovie} 
            savedMovies={savedMovies} 
          />
        )) : 
        movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))
        }
      </ul>
      {!isSavedMovies && 
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