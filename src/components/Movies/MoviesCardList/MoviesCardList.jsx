import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {

  const movies = [
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
    {
      country: 'America',
      directior: 'Tarantino',
      duration: 165,
      year: '2012',
      description: 'Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо разобраться…',
      image: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      trainerLink: 'https://www.youtube.com/watch?v=yBKruuHIzC4',
      thumbnail: 'https://kinorazdel.com/usr/video/187/film/image/head.jpg',
      nameRU: 'Джанго освобождённый',
      nameEN: 'Django unchained'
    },
  ]

  return (
    <section className={'movies-card-list'}>
      <div className={'movies-card-list__movies'}>
        {movies.map(movie => (
          <MoviesCard movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesCardList;