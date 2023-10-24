import React from 'react';
import Auth from '../ui/Auth/Auth';
import { resources_ru } from '../../translations/resources_ru';
import useForm from '../../utils/hooks/useForm';
import auth from '../../utils/Api/MainApi/MainApi';

const Register = () => {

  const regFormInitValue = {
    name: '',
    email: '',
    password: ''
  };

  const form = useForm(regFormInitValue);
  const {formValue} = form;
  const {handleFormChange} = form;

  const inputFields = [
    {
      type: 'text',
      name: 'name',
      text: resources_ru.name,
      value: '' || formValue.name,
      validations: {
        required: true,
        minLength: 2,
        maxLength: 30
      }
    },
    {
      type: 'text',
      name: 'email',
      text: 'E-mail',
      value: '' || formValue.email,
      validations: {
        required: true,
        type: 'email'
      }
    },
    {
      type: 'password',
      name: 'password',
      text: resources_ru.password,
      value: '' || formValue.password,
      validations: {
        required: true,
        minLength: 8
      }
    }
  ];

  const handleSignUp = (e) => {
    e.preventDefault();
    const {name, email, password} = formValue;
    auth.signUn(name, email, password)
      .then((res) => console.log(res))
  };

  return (
    <Auth
      type={'signup'}
      title={resources_ru.welcome}
      submitBtnText={resources_ru.submit_register}
      inputFields={inputFields}
      handleFormChange={handleFormChange}
      onSubmit={handleSignUp}
    />
  );
};

export default React.memo(Register);