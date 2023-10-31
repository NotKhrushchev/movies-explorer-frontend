import React, { useEffect, useState } from 'react';
import './FormInput.css'
import useInputValidation from '../../../../utils/hooks/useInputValidation';

const FormInput = ({ 
  inputClassName, 
  labelClassName, 
  inputBlockClassName, 
  input, 
  handleFormChange, 
  setInputValids,
  noErrSpan,
  extra
}) => {

  const validation = useInputValidation(input.value, input.validations);

  const {isValid} = validation;
  const {errMessage} = validation;
  const [isInputBlur, setInputBlur] = useState(false);

  // Отслеживаю уход с инпута для отображения ошибки валидации
  const handleInputOnBlur = () => {
    setInputBlur(true);
  }

  // Обновляю объект валидности инпутов на каждый ввод
  useEffect(() => {
    setInputValids && setInputValids((inputValids) => ({
      ...inputValids,
      [input.name]: isValid
    }));
  }, [isValid, setInputValids, input.name]);

  return (
    <div className={`${inputBlockClassName || 'input-block'}`}>
      <input
        type={input.type}
        name={input.name}
        id={input.name}
        className={`${inputClassName || 'input'} ${(!isValid && isInputBlur && !noErrSpan) && 'input_invalid'}`}
        required
        value={input.value}
        onChange={handleFormChange}
        onBlur={handleInputOnBlur}
        {...extra}
      />
      <label className={`${labelClassName || 'input-label'}`}>{input.text}</label>
      {(isInputBlur && !isValid && !noErrSpan) && <span className={'input-error'}>{errMessage}</span>}
    </div>
  );
};

export default React.memo(FormInput);