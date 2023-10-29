import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Btn from '../../ui/buttons/Btn';
import { resources_ru } from '../../../translations/resources_ru';

const MoviesCardList = ({ movies }) => {

  return (
    <section className={'movies-card-list'}>
      <ul className={'movies-card-list__movies'}>
        {movies && movies.map((movie, index) => (
          <MoviesCard movie={movie} key={index} />
        ))}
      </ul>
      <div className={'movies-card-list__loader'}>
        <Btn
          className={'movies-card-list__load-more-btn'}
          text={resources_ru.more}
        />
      </div>
    </section>
  );
};

export default MoviesCardList;