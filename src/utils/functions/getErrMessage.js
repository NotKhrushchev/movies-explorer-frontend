const getErrMessage =  (formType, errStatus) => {
  let errMessage

  switch (formType) {
    case 'signup':
      switch (errStatus) {
        case 409:
          errMessage = 'Пользователь с таким email уже существует.';
          break;
        default:
          errMessage = 'При регистрации пользователя произошла ошибка.';
          break;
      }
      break;

    case 'signin':
      switch (errStatus) {
        case 401:
          errMessage = 'Вы ввели неправильный логин или пароль.';
          break;
        default:
          errMessage = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
          break;
      }
      break;

    case 'editUser':
      switch (errStatus) {
        case 409:
          errMessage = 'Пользователь с таким email уже существует.';
          break;
        default:
          errMessage = 'При обновлении профиля произошла ошибка.';
          break;
      }
      break;
  
    default:
      break;
  }

  return errMessage;
};

export {
  getErrMessage
};