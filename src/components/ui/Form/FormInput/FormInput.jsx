import React, { useEffect, useState } from 'react';
import './FormInput.css'
import useInputValidation from '../../../../utils/hooks/useInputValidation';

const FormInput = ({ input, handleFormChange, setInputValids }) => {

  const validation = useInputValidation(input.value, input.validations);

  const {isValid} = validation;
  const {errorText} = validation;
  const [isInputBlur, setInputBlur] = useState(false);

  // Отслеживаю уход с инпута для отображения ошибки валидации
  const handleInputOnBlur = () => {
    setInputBlur(true);
  }

  // Обновляю объект валидности инпутов на каждый ввод
  useEffect(() => {
    setInputValids((inputValids) => ({
      ...inputValids,
      [input.name]: isValid
    }));
  }, [isValid, setInputValids, input.name]);

  return (
    <div className={'input-block'}>
      <input
        type={input.type}
        name={input.name}
        id={input.name}
        className={`input ${(!isValid && isInputBlur) && 'input_invalid'}`}
        required
        value={input.value}
        onChange={handleFormChange}
        onBlur={handleInputOnBlur}
      />
      <label className='input-label'>{input.text}</label>
      {(isInputBlur && !isValid) && <span className={'input-error'}>{errorText}</span>}
    </div>
  );
};

export default React.memo(FormInput);