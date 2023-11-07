import React, { useCallback } from 'react';
import { resources_ru } from '../../../translations/resources_ru';
import './MovieCard.css';
import Btn from '../../ui/buttons/Btn';
import { useLocation } from 'react-router-dom';

const MovieCard = ({ movie, savedMovies, onMovieBtnClick }) => {

  const currentPage = useLocation().pathname.split('/').pop();

  /** Перевод минут в часы для отображения */
  const convertDurationToHours = () => {
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration - (hours * 60);
    const time = hours 
      ? `${hours}${resources_ru.hours} ${minutes}${resources_ru.minutes}` 
      : `${minutes}${resources_ru.minutes}`

    return time;
  };

  const isInSaved = useCallback((movie) => {
    // Проверяю есть ли id фильма в сохраненных
    if (savedMovies) {
      return savedMovies.some((savedMovie) => savedMovie?.movieId === movie?.id) ? true : false;
    };
  }, [savedMovies]);

  return (
    <article className={'movie-card'}>
      <img 
        className={'movie-card__poster'} 
        src={movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image}
        alt={resources_ru.movie_poster}
        onClick={() => window.open(`${movie.trailerLink}`, '_blank')}
      />
      <div className={'movie-card__info'}>
        <h2 className={'movie-card__name'}>{movie.nameRU}</h2>
        {currentPage === 'movies' ? 
          <Btn
            className={isInSaved(movie) ? `movie-card__save-btn_active` : `movie-card__save-btn`}
            ariaLabel={resources_ru.remove_from_saved}
            onClick={() => isInSaved(movie) ? onMovieBtnClick.removeMovieFromSaved(movie) : onMovieBtnClick.saveMovie(movie)}
          />
          :
          <Btn
            className={'movie-card__remove-from-saved-btn'}
            ariaLabel={resources_ru.save}
            onClick={() => onMovieBtnClick.removeMovieFromSaved(movie)}
          />
        }
      </div>
      <span className={'movie-card__duration'}>{convertDurationToHours()}</span>
    </article>
  );
};

export default MovieCard;