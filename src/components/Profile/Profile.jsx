import React from 'react';
import { resources_ru } from '../../translations/resources_ru';
import './Profile.css';
import Btn from '../ui/buttons/Btn';

const Profile = () => {

  return (
    <div className={'profile'}>
      <h1 className={'profile__title'}>{`${resources_ru.hello}, ${'Никита'}!`}</h1>
      <div className={'profile__info'}>
        <div className={'profile__block'}>
          <p className={'profile__block__property'}>{resources_ru.name}</p>
          <p className={'profile__block__value'}>{`${'Никита'}`}</p>
        </div>
        <div className={'profile__block'}>
          <p className={'profile__block__property'}>E-mail</p>
          <p className={'profile__block__value'}>{`${'Nikitafilemine1@gmail.com'}`}</p>
        </div>
      </div>
      <div className={'profile__controlls'}>
        <Btn addtlClass={'profile__edit-btn'} text={resources_ru.edit} ariaLabel={resources_ru.edit} />
        <Btn addtlClass={'profile__logout-btn'} text={resources_ru.logout} ariaLabel={resources_ru.logout} />
      </div>
    </div>
  );
};

export default Profile;