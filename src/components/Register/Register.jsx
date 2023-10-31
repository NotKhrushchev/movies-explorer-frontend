import React, { useCallback, useEffect, useState } from 'react';
import Auth from '../ui/Auth/Auth';
import { resources_ru } from '../../translations/resources_ru';
import useForm from '../../utils/hooks/useForm';
import auth from '../../utils/Api/MainApi/MainApi';
import UserContext from '../../contexts/userContext';
import LoadingContext from '../../contexts/loadingContext';
import { getErrMessage } from '../../utils/functions/getErrMessage';

const Register = () => {

  const regFormInitValue = {
    name: '',
    email: '',
    password: ''
  };

  const {setCurrentUser} = React.useContext(UserContext);
  const {setIsLoading} = React.useContext(LoadingContext);
  const [errMessage, setErrMessage] = useState('');

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
        maxLength: 30,
        type: 'name'
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
        required: true
      }
    }
  ];

  // Убираю ошибку формы если изменились инпуты
  useEffect(() => {
    setErrMessage('');
  }, [formValue]);

  const handleSignUp = useCallback((e) => {
    e.preventDefault();
    setIsLoading(true);
    const {name, email, password} = formValue;
    auth.signUn(name, email, password)
      .then((res) => {
        auth.signIn(email, password)
          .then((res) => {
            const token = res.token;
            localStorage.setItem('jwt', token);
            auth.getUserByToken(token)
              .then((res) => {
                setCurrentUser(res);
              });
          })
          .catch((errStatus) => {
            setErrMessage(getErrMessage('signin', errStatus));
          })
      })
      .catch((errStatus) => {
        setErrMessage(getErrMessage('signup', errStatus));
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue]);

  return (
    <Auth
      type={'signup'}
      title={resources_ru.welcome}
      submitBtnText={resources_ru.submit_register}
      inputFields={inputFields}
      handleFormChange={handleFormChange}
      onSubmit={handleSignUp}
      authErrMessage={errMessage}
    />
  );
};

export default React.memo(Register);