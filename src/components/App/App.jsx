import { useState } from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { sideBarLinks } from '../../utils/constants';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../Movies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

/** Корневой компонент */
function App() {
  const currentPage = useLocation().pathname.split('/').pop();
  
  const [sideBar, setSideBar] = useState(false);
  const loggedIn = false;

  const isHeaderVisible = () => {
    const isVisible = (currentPage === ''
    || currentPage === 'profile'
    || currentPage === 'movies'
    || currentPage === 'saved-movies'
    );
    return isVisible;
  }
  const isFooterVisible = () => {
    const isVisible = (currentPage === ''
    || currentPage === 'movies'
    || currentPage === 'saved-movies'
    );
    return isVisible;
  }
  
  return (
    <div className={'app'}>
      <Header loggedIn={loggedIn} setSideBar={setSideBar} isVisible={isHeaderVisible()} />
      <Routes>
        <Route 
          path='/' 
          element={<Main />} 
        />
        <Route 
          path='/movies' 
          element={<Movies />} 
        />
        <Route 
          path='/saved-movies' 
          element={<SavedMovies />} 
        />
        <Route 
          path='/profile' 
          element={<Profile />} 
        />
        <Route 
          path='/signup' 
          element={<Register />} 
        />
        <Route 
          path='/signin' 
          element={<Login />} 
        />
        <Route 
          path='/*' 
          element={<NotFoundPage />} 
        />
      </Routes>
      <BurgerMenu 
        sideBar={sideBar} 
        setSideBar={setSideBar} 
        navItems={sideBarLinks} 
        accountBtnRequired={true} 
      />
      {<Footer isVisible={isFooterVisible()} />}
    </div>
  );
};

export default App;
