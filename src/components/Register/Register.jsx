import React, { useEffect, useState } from 'react';
import Auth from '../ui/Auth/Auth';
import { resources_ru } from '../../translations/resources_ru';
import useForm from '../../utils/hooks/useForm';
import auth from '../../utils/Api/MainApi/MainApi';
import UserContext from '../../contexts/userContext';
import LoadingContext from '../../contexts/loadingContext';
import { getErrMessage } from '../../utils/hooks/getErrMessage';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const regFormInitValue = {
    name: '',
    email: '',
    password: ''
  };

  const {setLoggedIn, setUser} = React.useContext(UserContext);
  const {setIsLoading} = React.useContext(LoadingContext);
  const [errText, setErrText] = useState('');

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
    setErrText('');
  }, [formValue]);

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const {name, email, password} = formValue;
    auth.signUn(name, email, password)
      .then((res) => {
        setLoggedIn(true);
        setUser(res);
        // Кидаю пользователя на страницу с фильмами
        navigate('/movies', {replace: true});
      })
      .catch((errStatus) => {
        setErrText(getErrMessage('signup', errStatus));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Auth
      type={'signup'}
      title={resources_ru.welcome}
      submitBtnText={resources_ru.submit_register}
      inputFields={inputFields}
      handleFormChange={handleFormChange}
      onSubmit={handleSignUp}
      authErrMessage={errText}
      setErrText={setErrText}
    />
  );
};

export default React.memo(Register);