import React, { useEffect, useState } from 'react';
import Btn from '../buttons/Btn';
import './Auth.css';
import { resources_ru } from '../../../translations/resources_ru';
import RegBtn from '../buttons/RegBtn/RegBtn';
import LoginBtn from '../buttons/LoginBtn/LoginBtn';
import FormInput from '../Form/FormInput/FormInput';
import LoadingContext from '../../../contexts/loadingContext';
import Preloader from '../Preloader/Preloader';
import Logo from '../Logo/Logo';

const Auth = ({ 
  type, 
  title, 
  submitBtnText, 
  onSubmit, 
  inputFields, 
  handleFormChange,
  authErrMessage
}) => {

  const {isLoading} = React.useContext(LoadingContext);

  // Объект со значениями валидности каждого инпута
  const [inputValids, setInputValids] = useState({});
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Глобальный обработчик валидности формы
    Object.values(inputValids).every((e) => e === true) ? setFormValid(true) : setFormValid(false);

  }, [inputValids]);

  return (
    <main className={'auth'}>
      <form className={'auth__form'} onSubmit={onSubmit}>
        <Logo className={'auth__form-logo'} />
        <h1 className={'auth__form-title'}>{title}</h1>
        <div className={'auth__form-fields'}>
          {inputFields.map((input) => (
            <FormInput 
              key={input.name}
              input={input} 
              handleFormChange={handleFormChange}
              setInputValids={setInputValids}
            />
          ))}
        </div>
        <div className={'auth__form-actions'}>
          <span className={'auth__err-text'}>{authErrMessage}</span>
          {!isLoading ?
            <Btn
              className={'auth__form-submit-btn'}
              text={submitBtnText}
              onClick={onSubmit}
              ariaLabel={submitBtnText}
              type={'submit'}
              disabled={!formValid || isLoading}
            />
            :
            <Preloader isSmall={true} />
          }
          {type === 'signup' 
            ?
            <span className={'auth__form-prompt'}>
              {resources_ru.already_have_account} <LoginBtn className={'auth__form-nav-link btn'} />
            </span>
            :
            <span className={'auth__form-prompt'}>
              {resources_ru.dont_have_account} <RegBtn className={'auth__form-nav-link btn'} />
            </span>
          }
        </div>
      </form>
    </main>
  );
};

export default React.memo(Auth);