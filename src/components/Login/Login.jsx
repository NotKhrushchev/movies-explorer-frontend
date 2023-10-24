import React from 'react';
import Auth from '../ui/Auth/Auth';
import { resources_ru } from '../../translations/resources_ru';
import useForm from '../../utils/hooks/useForm';

const Login = () => {

  const logFormInitValue = {
    email: '',
    password: ''
  };

  const form = useForm(logFormInitValue);
  const {formValue} = form;
  const {handleFormChange} = form;

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const inputFields = [
    {
      type: 'text',
      name: 'email',
      text: 'E-mail',
      value: '' || formValue.email,
      validations: {
        type: 'email',
        required: true
      }
    },
    {
      type: 'password',
      name: 'password',
      text: resources_ru.password,
      value: '' || formValue.password,
      validations: {
        required: true,
      }
    }
  ];

  return (
    <Auth
      type={'signin'}
      title={resources_ru.glad_to_see}
      submitBtnText={resources_ru.login}
      inputFields={inputFields}
      handleFormChange={handleFormChange}
      onSubmit={handleSignIn}
    />
  );
};

export default React.memo(Login);