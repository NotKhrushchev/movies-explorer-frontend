import React from 'react';
import { resources_ru } from '../../translations/resources_ru';
import './Profile.css';
import Btn from '../ui/buttons/Btn';
import NLink from '../ui/NLink/NLink';

const Profile = () => {

  return (
    <main className={'profile'}>
      <h1 className={'profile__title'}>{`${resources_ru.hello}, ${'Никита'}!`}</h1>
      <div className={'profile__info'}>
        <div className={'profile__block'}>
          <p className={'profile__block-property'}>{resources_ru.name}</p>
          <p className={'profile__block-value'}>{`${'Никита'}`}</p>
        </div>
        <div className={'profile__block'}>
          <p className={'profile__block-property'}>E-mail</p>
          <p className={'profile__block-value'}>{`${'Nikitafilemine1@gmail.com'}`}</p>
        </div>
      </div>
      <div className={'profile__controlls'}>
        <Btn addtlClass={'profile__edit-btn'} text={resources_ru.edit} ariaLabel={resources_ru.edit} />
        <NLink wayTo={'/'} addtlClass={'profile__logout-btn'} title={resources_ru.logout} ariaLabel={resources_ru.logout} />
      </div>
    </main>
  );
};

export default Profile;