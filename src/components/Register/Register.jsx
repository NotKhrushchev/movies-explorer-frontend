import React from 'react';
import Auth from '../ui/Auth/Auth';
import { resources_ru } from '../../translations/resources_ru';

const Register = () => {
  const inputFields = [
    {
      type: 'text',
      name: 'name-input',
      text: resources_ru.name,
      minLength: 2,
      maxLength: 30
    },
    {
      type: 'text',
      name: 'email-input',
      text: 'E-mail'
    },
    {
      type: 'password',
      name: 'password-input',
      text: resources_ru.password,
      minLength: 8,
    }
  ];

  return (
    <Auth
      type={'signup'}
      title={resources_ru.welcome}
      submitBtnText={resources_ru.submit_register}
      inputFields={inputFields}
    />
  );
};

export default Register;