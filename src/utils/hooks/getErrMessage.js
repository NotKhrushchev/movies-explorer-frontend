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
  
    default:
      break;
  }

  return errText;
};

export {
  getErrMessage
};