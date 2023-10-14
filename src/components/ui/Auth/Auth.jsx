import React from 'react';
import Btn from '../buttons/Btn';
import './Auth.css';
import '../buttons/Btn.css';
import { resources_ru } from '../../../translations/resources_ru';
import moviesExplorerLogo from '../../../images/logo/movies-explorer-logo.svg';
import RegBtn from '../buttons/RegBtn/RegBtn';
import LoginBtn from '../buttons/LoginBtn/LoginBtn';

const Auth = ({type, title, submitBtnText, onSubmit, inputFields }) => {
  return (
    <main className={'auth'}>
      <form className={'auth__form'} onSubmit={onSubmit}>
        <img className={'auth__form-logo'} src={moviesExplorerLogo} alt={resources_ru.movies_explorer_logo} draggable={false} />
        <h1 className={'auth__form-title'}>{title}</h1>
        <div className={'auth__form-fields'}>
          {inputFields.map((input) => (
            <div className={'auth__form-input-data'} key={input.name}>
              <input
                type={input.type}
                name={input.name}
                id={input.name}
                className={'auth__form-input'}
                required
                minLength={input.minLength}
                maxLength={input.maxLength}
              />
              <label className='auth__form-input-label'>{input.text}</label>
              <span className={'auth__form-input-error'}>Что-то пошло не так...</span>
            </div>
          ))}
        </div>
        <div className={'auth__form-actions'}>
          <Btn
            addtlClass={'auth__form-submit-btn'}
            text={submitBtnText}
            ariaLabel={submitBtnText}
            type={'submit'}
          />
          {type === 'signup' 
            ?
            <span className={'auth__form-prompt'}>
              {resources_ru.already_have_account} <LoginBtn addtlClass={'auth__form-nav-link btn'} />
            </span>
            :
            <span className={'auth__form-prompt'}>
              {resources_ru.dont_have_account} <RegBtn addtlClass={'auth__form-nav-link btn'} />
            </span>
          }
        </div>
      </form>
    </main>
  );
};

export default Auth;