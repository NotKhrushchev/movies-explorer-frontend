import { useCallback, useState } from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { sideBarLinks } from '../../utils/constants';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../Movies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import UserContext from '../../contexts/userContext';
import LoadingContext from '../../contexts/loadingContext';
import { useEffect } from 'react';
import auth from '../../utils/Api/MainApi/MainApi';
import moviesApi from '../../utils/Api/MoviesApi/MoviesApi';

/** Корневой компонент */
function App() {
  const currentPage = useLocation().pathname.split('/').pop();
  const navigate = useNavigate();
  const [isMoviesErr, setMoviesErr] = useState(false);
  const [initMovies, setInitMovies] = useState(JSON.parse(localStorage?.initMovies || null));
  const [sideBar, setSideBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

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

  // Загружаю фильмы при загрузке приложения если они отсутствуют в хранилище
  useEffect(() => {
    if (!initMovies) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          console.log(movies);
          localStorage.setItem('initMovies', JSON.stringify(movies));
          setInitMovies(movies);
          console.log('Initial movies loaded');
        })
        .catch(() => setMoviesErr(true))
        .finally(() => setIsLoading(false));
    }
  }, []);

  // Проверка токена
  const handleTokenCheck = useCallback(() => {
    if (localStorage?.jwt) {
      auth.getUserByToken(localStorage?.jwt)
        .then(res => {
          setCurrentUser(res);
          navigate('/movies', {replace: true});
        })
        .catch(err => console.log(err));
    } else {
      setCurrentUser(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage?.jwt]);

  // Проверяю токен и подгружаю фильмы при загрузке приложения
  useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck]);
  
  return (
    <div className={'app'}>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <LoadingContext.Provider value={{isLoading, setIsLoading}}>
          <Header setSideBar={setSideBar} isVisible={isHeaderVisible()} />
          <Routes>
            <Route 
              path='/' 
              element={<Main />} 
            />
            <Route 
              path='/movies' 
              element={<Movies initMovies={initMovies} isMoviesErr={isMoviesErr} />} 
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
        </LoadingContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
