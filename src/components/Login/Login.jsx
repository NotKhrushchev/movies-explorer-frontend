import React, { useEffect, useState } from 'react';
import Auth from '../ui/Auth/Auth';
import { resources_ru } from '../../translations/resources_ru';
import useForm from '../../utils/hooks/useForm';
import UserContext from '../../contexts/userContext';
import LoadingContext from '../../contexts/loadingContext';
import mainApi from '../../utils/Api/MainApi/MainApi';
import { getErrMessage } from '../../utils/functions/getErrMessage';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const logFormInitValue = {
    email: '',
    password: ''
  };

  const {setCurrentUser} = React.useContext(UserContext);
  const {isLoading, setIsLoading} = React.useContext(LoadingContext);
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();

  const form = useForm(logFormInitValue);
  const {formValue} = form;
  const {handleFormChange} = form;

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

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const {email, password} = formValue;
    mainApi.signIn(email, password)
      .then((res) => {
        const token = res.token;
        localStorage.setItem('jwt', token);
        mainApi.getUserByToken(token)
          .then((res) => {
            setCurrentUser(res);
            navigate('/movies', {replace: true});
          });
      })
      .catch((errStatus) => {
        setErrMessage(getErrMessage('signin', errStatus));
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  // Убираю ошибку формы если изменились инпуты
  useEffect(() => {
    setErrMessage('');
  }, [formValue, isLoading]);

  return (
    <Auth
      type={'signin'}
      title={resources_ru.glad_to_see}
      submitBtnText={resources_ru.login}
      inputFields={inputFields}
      handleFormChange={handleFormChange}
      onSubmit={handleSignIn}
      authErrMessage={errMessage}
    />
  );
};

export default React.memo(Login);