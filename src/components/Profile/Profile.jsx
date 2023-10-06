import React from 'react';
import { resources_ru } from '../../translations/resources_ru';
import './Profile.css';
import AccountActionsBtn from '../ui/buttons/AccountActionsBtn/AccountActionsBtn';

const Profile = () => {
  return (
    <div className={'profile'}>
      <h1 className={'profile__title'}>{`${resources_ru.hello}, ${'Никита'}!`}</h1>
      <div className={'profile__info'}>
        <div className={'profile__block'}>
          <p className={'profile__block__property'}>{resources_ru.name}</p>
          <p className={'profile__block__value'}>{`${'Никита'}`}</p>
        </div>
        <hr />
        <div className={'profile__block'}>
          <p className={'profile__block__property'}>E-mail</p>
          <p className={'profile__block__value'}>{`${'Nikitafilemine1@gmail.com'}`}</p>
        </div>
      </div>
      <div className={'profile__controlls'}>
        <AccountActionsBtn additionalClass={'profile__edit-btn'} text={resources_ru.edit} />
        <AccountActionsBtn additionalClass={'profile__logout-btn'} text={resources_ru.logout} />
      </div>
    </div>
  );
};

export default Profile;