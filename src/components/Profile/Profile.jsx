import React, { useCallback, useEffect, useState } from 'react';
import { resources_ru } from '../../translations/resources_ru';
import './Profile.css';
import Btn from '../ui/buttons/Btn';
import UserContext from '../../contexts/userContext';
import useForm from '../../utils/hooks/useForm';
import FormInput from '../ui/Form/FormInput/FormInput';
import Preloader from '../ui/Preloader/Preloader';
import auth from '../../utils/Api/MainApi/MainApi';
import { isEqual } from 'lodash';
import { getErrMessage } from '../../utils/functions/getErrMessage';
import LoadingContext from '../../contexts/loadingContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();
  const {setCurrentUser, currentUser} = React.useContext(UserContext);
  const {setIsLoading, isLoading} = React.useContext(LoadingContext);
  const [isOnEdit, setOnEdit] = useState(false);
  const [isInfoChanged, setInfoChanged] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  // Объект со значениями валидности каждого инпута
  const [inputValids, setInputValids] = useState({});
  const [formValid, setFormValid] = useState(false);

  const userFormInitValue = {
    name: currentUser?.name,
    email: currentUser?.email
  };

  const form = useForm(userFormInitValue);
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
    }
  ];

  // Отслеживаю изменение данных пользователя
  useEffect(() => {
    !isEqual(userFormInitValue, formValue) ? setInfoChanged(true) : setInfoChanged(false);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue, isLoading])

  useEffect(() => {
    // Глобальный обработчик валидности формы
    Object.values(inputValids).every((e) => e === true) ? setFormValid(true) : setFormValid(false);
  }, [inputValids]);

  // Убираю ошибку формы если изменились инпуты
  useEffect(() => {
    setErrMessage('');
  }, [formValue]);

  const signOut = () => {
    localStorage.clear();
    navigate('/', {replace: true});
  }

  const handleEditUser = useCallback(() => {
    setIsLoading(true);
    const {name, email} = formValue;
    auth.editUser(name, email)
      .then(() => {
        setCurrentUser({...currentUser, name, email});
        setOnEdit(false);
      })
      .catch((errStatus) => {
        setErrMessage(getErrMessage('editUser', errStatus));
      })
      .finally(() => setIsLoading(false))
  }, [formValue, setCurrentUser, currentUser, setIsLoading]);

  return (
    <main className={'profile'}>
      <form className={'profile__form'}>
        <h1 className={'profile__title'}>{`${resources_ru.hello}, ${currentUser?.name}!`}</h1>
        <>
          {inputFields.map((input) => 
            <FormInput
              inputClassName={'profile__input'}
              labelClassName={'profile__input-label'}
              inputBlockClassName={`profile__input-section ${isOnEdit && 'profile__input-section_active'}`}
              key={input.name}
              input={input} 
              handleFormChange={handleFormChange}
              setInputValids={setInputValids}
              noErrSpan={true}
              extra={{
                disabled: !isOnEdit
              }}
            />
          )}
        </>
        <div className={'profile__controlls'}>
          {!isOnEdit ? 
            <>
              <Btn 
                className={'profile__edit-btn'} 
                text={resources_ru.edit} 
                ariaLabel={resources_ru.edit}
                onClick={() => setOnEdit(true)}
              />
              <Btn
                className={'profile__logout-btn'} 
                text={resources_ru.logout} 
                ariaLabel={resources_ru.logout} 
                onClick={signOut}
              />
            </>
            :
            <>
              <span className={'profile__err-text'}>{errMessage}</span>
              {!isLoading ?
              <Btn
                className={'profile__form-submit-btn'}
                text={resources_ru.save}
                onClick={handleEditUser}
                ariaLabel={'Сохранить'}
                type={'submit'}
                disabled={!formValid || !isInfoChanged}
              />
              :
              <Preloader isSmall={true} />}
            </>
          }
        </div>
      </form>
    </main>
  );
};

export default Profile;