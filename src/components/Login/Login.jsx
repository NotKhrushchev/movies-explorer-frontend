import React from 'react';
import Auth from '../ui/Auth/Auth';
import { resources_ru } from '../../translations/resources_ru';

const Login = () => {
  const inputFields = [
    {
      type: 'text',
      name: 'email-input',
      text: 'E-mail'
    },
    {
      type: 'password',
      name: 'password-input',
      text: resources_ru.password,
    }
  ];

  return (
    <Auth
      type={'signin'}
      title={resources_ru.glad_to_see}
      submitBtnText={resources_ru.login}
      inputFields={inputFields}
    />
  );
};

export default Login;