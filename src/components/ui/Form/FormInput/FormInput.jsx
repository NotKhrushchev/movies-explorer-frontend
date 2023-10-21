import React, { useEffect, useState } from 'react';
import './FormInput.css'
import useInputValidation from '../../../../utils/hooks/useInputValidation';

const FormInput = ({ inputData, handleFormChange, validations, setFormValid }) => {

  const validation = useInputValidation(inputData.value, validations);
  const {isValid} = validation;
  const {errorText} = validation;
  const [isInputBlur, setInputBlur] = useState(false);

  // Отслеживаю уход с инпута для отображения ошибки валидации
  const handleInputOnBlur = () => {
    setInputBlur(true);
  }

  useEffect(() => {
    isValid && setFormValid(true);
  }, [isValid, setFormValid]);

  return (
    <div className={'input-block'}>
      <input
        type={inputData.type}
        name={inputData.name}
        id={inputData.name}
        className={`input ${(!isValid && isInputBlur) && 'input_invalid'}`}
        required
        value={inputData.value}
        onChange={handleFormChange}
        onBlur={handleInputOnBlur}
      />
      <label className='input-label'>{inputData.text}</label>
      {(isInputBlur && !isValid) && <span className={'input-error'}>{errorText}</span>}
    </div>
  );
};

export default FormInput;