import { useState } from 'react';
import { resources_ru } from '../../translations/resources_ru';
import Header from '../Header/Header';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import './App.css';
import Promo from '../Promo/Promo';

/** Корневой компонент */
function App() {
  
  const [sideBar, setSideBar] = useState(false);

  /** Ссылки для сайдбара */
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
  
  return (
    <div className="app">
      <Header setSideBar={setSideBar}/>
      <BurgerMenu 
        sideBar={sideBar} 
        setSideBar={setSideBar} 
        navItems={sideBarLinks} 
        accountBtnRequired={true} 
      />
      <Promo/>
    </div>
  );
};

export default App;
