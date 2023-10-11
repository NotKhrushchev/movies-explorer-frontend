import { useState } from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { sideBarLinks } from '../../utils/constants';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

/** Корневой компонент */
function App() {
  
  const [sideBar, setSideBar] = useState(false);
  const loggedIn = false;
  
  return (
    <div className={'app'}>
      {loggedIn && <Header setSideBar={setSideBar} />}
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
          path='/profile' 
          element={<Profile />} 
        />
        <Route 
          path='/signup' 
          element={<Register />} 
        />
        <Route 
          path='/signin' 
          element={<Login/>} 
        />
      </Routes>
      <BurgerMenu 
        sideBar={sideBar} 
        setSideBar={setSideBar} 
        navItems={sideBarLinks} 
        accountBtnRequired={true} 
      />
      {loggedIn && <Footer />}
    </div>
  );
};

export default App;
