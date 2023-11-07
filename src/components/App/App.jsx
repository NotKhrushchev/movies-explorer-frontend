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
import mainApi from '../../utils/Api/MainApi/MainApi';
import ProtectedRoute from '../ui/ProtectedRoute/ProtectedRoute';

/** Корневой компонент */
function App() {
  const currentPage = useLocation().pathname.split('/').pop();
  const navigate = useNavigate();
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesErr, setSavedMoviesErr] = useState(false);
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

  // Проверка токена
  const handleTokenCheck = useCallback(() => {
    if (localStorage?.jwt) {
      mainApi.getUserByToken(localStorage?.jwt)
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

  useEffect(() => {
    if (currentUser) {
      setIsLoading(true);
      mainApi.getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies)})
        .catch(() => setSavedMoviesErr(true))
        .finally(() => setIsLoading(false));
    };
  }, [currentUser, setSavedMovies]);

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
              element={
                <ProtectedRoute
                  element={Movies}
                  /**
                   * Передаю сохраненные фильмы 
                   * для отрисовки кнопки лайка у карточки
                   */ 
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  savedMoviesErr={savedMoviesErr}
                />
              } 
            />
            <Route 
              path='/saved-movies' 
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              } 
            />
            <Route 
              path='/profile' 
              element={
                <ProtectedRoute
                  element={Profile}
                />
              } 
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
