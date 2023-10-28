import React from 'react';
import { resources_ru } from '../../translations/resources_ru';
import './Profile.css';
import Btn from '../ui/buttons/Btn';
import NLink from '../ui/NLink/NLink';
import UserContext from '../../contexts/userContext';

const Profile = () => {

  const {currentUser} = React.useContext(UserContext);

  return (
    <main className={'profile'}>
      <h1 className={'profile__title'}>{`${resources_ru.hello}, ${currentUser?.name}!`}</h1>
      <form className={'profile__form'}>
        <div className={'profile__form-section'}>
          <label className={'profile__input-label'} htmlFor={'name-input'}>{resources_ru.name}</label>
          <input 
            className={'profile__input'} 
            type={'text'} 
            id={'name-input'} 
            name={'name-input'} 
            disabled 
            value={currentUser?.name}
          />
        </div>
        <div className={'profile__form-section'}>
          <label className={'profile__input-label'} htmlFor={'email-input'}>E-mail</label>
          <input 
            className={'profile__input'} 
            type={'text'} 
            id={'email-input'} 
            name={'name-input'} 
            disabled 
            value={currentUser?.email}
          />
        </div>
      </form>
      <div className={'profile__controlls'}>
        <Btn addtlClass={'profile__edit-btn'} text={resources_ru.edit} ariaLabel={resources_ru.edit} />
        <NLink wayTo={'/'} addtlClass={'profile__logout-btn'} title={resources_ru.logout} ariaLabel={resources_ru.logout} />
      </div>
    </main>
  );
};

export default Profile;