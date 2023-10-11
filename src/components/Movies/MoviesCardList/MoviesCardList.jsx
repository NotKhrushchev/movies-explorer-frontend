import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Btn from '../../ui/buttons/Btn';
import { resources_ru } from '../../../translations/resources_ru';

const MoviesCardList = ({ movies }) => {

  return (
    <section className={'movies-card-list'}>
      <div className={'movies-card-list__movies'}>
        {movies.map((movie, index) => (
          <MoviesCard movie={movie} key={index} />
        ))}
      </div>
      <div className={'movies-card-list__loader'}>
        <Btn
          addtlClass={'movies-card-list__load-more-btn'}
          text={resources_ru.more}
        />
      </div>
    </section>
  );
};

export default MoviesCardList;