import React from 'react';
import { resources_ru } from '../../translations/resources_ru';
import Btn from '../ui/buttons/Btn';
import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  const navigate = useNavigate();

  return (
    <main className={'not-found-page'}>
      <div className={'not-found-page__content'}>
        <h1 className={'not-found-page__title'}>404</h1>
        <p className={'not-found-page__subtitle'}>{resources_ru.page_not_found}</p>
        <Btn
          addtlClass={'back-btn'}
          onClick={() => navigate(-1)}
          text={resources_ru.back}
          ariaLabel={resources_ru.back}
        />
      </div>
    </main>
  );
};

export default NotFoundPage;