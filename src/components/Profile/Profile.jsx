import React, { useCallback, useState } from 'react';
import { resources_ru } from '../../translations/resources_ru';
import './Profile.css';
import Btn from '../ui/buttons/Btn';
import NLink from '../ui/NLink/NLink';
import UserContext from '../../contexts/userContext';
import useForm from '../../utils/hooks/useForm';
import FormInput from '../ui/Form/FormInput/FormInput';
import Preloader from '../ui/Preloader/Preloader';
import auth from '../../utils/Api/MainApi/MainApi';

const Profile = () => {

  const {currentUser} = React.useContext(UserContext);
  const [isOnEdit, setOnEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleEditUser = useCallback(() => {
    const {name, email} = formValue;
    auth.editUser(name, email)
      .then(() => setOnEdit(false))
      .catch((err) => console.log(err))
  }, [formValue]);

  return (
    <main className={'profile'}>
      <h1 className={'profile__title'}>{`${resources_ru.hello}, ${currentUser?.name}!`}</h1>
      <form className={'profile__form'}>
        {inputFields.map((input) => 
          <FormInput
            inputClassName={'profile__input'}
            labelClassName={'profile__input-label'}
            inputBlockClassName={`profile__form-section ${isOnEdit && 'profile__form-section_active'}`}
            key={input.name}
            input={input} 
            handleFormChange={handleFormChange}
            noErrSpan={true}
            extra={{
              disabled: isLoading
            }}
          />
        )}
      </form>
      <div className={'profile__controlls'}>
        { !isOnEdit ? 
          <>
            <Btn 
              className={'profile__edit-btn'} 
              text={resources_ru.edit} 
              ariaLabel={resources_ru.edit}
              onClick={() => setOnEdit(true)}
            />
            <NLink 
              wayTo={'/'} 
              className={'profile__logout-btn'} 
              title={resources_ru.logout} 
              ariaLabel={resources_ru.logout} 
            />
          </>
          :
          !isLoading ?
            <Btn
              className={'profile__form-submit-btn'}
              text={!isLoading ? 'Сохранить' : 'Сохранить...'}
              onClick={handleEditUser}
              ariaLabel={'Сохранить'}
              type={'submit'}
              disabled={isLoading}
            />
            :
            <Preloader isSmall={true} />
        }
      </div>
    </main>
  );
};

export default Profile;