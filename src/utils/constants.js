import { resources_ru } from "../translations/resources_ru";

const sideBarLinks = [
  {
    title: resources_ru.main,
    wayTo: '/'
  },
  {
    title: resources_ru.movies,
    wayTo: '/movies'
  },
  {
    title: resources_ru.saved_movies,
    wayTo: '/saved-movies'
  }
];

export {
  sideBarLinks
}