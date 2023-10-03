import { useState } from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { sideBarLinks } from '../../utils/constants';
import Movies from '../Movies/Movies';

/** Корневой компонент */
function App() {
  
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <div className={'app'}>
      <Header setSideBar={setSideBar} />
      <Routes>
        <Route 
          path='/' 
          element={<Main />} 
        />
        <Route 
          path='/movies' 
          element={<Movies />} 
        />
      </Routes>
      <BurgerMenu 
        sideBar={sideBar} 
        setSideBar={setSideBar} 
        navItems={sideBarLinks} 
        accountBtnRequired={true} 
      />
      <Footer />
    </div>
  );
};

export default App;
