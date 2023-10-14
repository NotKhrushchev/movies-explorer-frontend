import React from 'react';
import { resources_ru } from '../../../translations/resources_ru';
import './MoviesCard.css';
import Btn from '../../ui/buttons/Btn';

const MoviesCard = ({ movie }) => {

  /** Перевод минут в часы для отображения */
  const convertDurationToHours = () => {
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration - (hours * 60);

    return `${hours}${resources_ru.hours} ${minutes}${resources_ru.minutes}`;
  };

  return (
    <article className={'movies-card'}>
      <img className={'movies-card__poster'} src={movie.image} alt={resources_ru.movie_poster} />
      <div className={'movies-card__info'}>
        <h2 className={'movies-card__name'}>{movie.nameRU}</h2>
        <Btn
          addtlClass={'movies-card__like-btn'}
          ariaLabel={resources_ru.like}
        />
      </div>
      <hr className={'movie-line'} />
      <span className={'movies-card__duration'}>{convertDurationToHours()}</span>
    </article>
  );
};

export default MoviesCard;