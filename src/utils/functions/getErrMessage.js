const getErrMessage =  (formType, errStatus) => {
  let errText

  switch (formType) {
    case 'signup':
      switch (errStatus) {
        case 409:
          errText = 'Пользователь с таким email уже существует.';
          break;
        default:
          errText = 'При регистрации пользователя произошла ошибка.';
          break;
      }
      break;

    case 'signin':
      switch (errStatus) {
        case 401:
          errText = 'Вы ввели неправильный логин или пароль.';
          break;
        default:
          errText = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
          break;
      }
      break;
  
    default:
      break;
  }

  return errText;
};

export {
  getErrMessage
};