import { useEffect, useState } from "react";
import { resources_ru } from "../../translations/resources_ru";

// Хук валидации инпута
const useInputValidation = ((value, validations) => {
  
  const [isValid, setIsValid] = useState(false);
  const [isEmptyErr, setEmptyErr] = useState(false);
  const [minLengthErr, setMinLengthErr] = useState(false);
  const [maxLengthErr, setMaxLengthErr] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
  
        // Проверка на пустое поле
        case 'required':
          if (!value) {
            setEmptyErr(true);
            setErrorText(resources_ru.input_empty_err);
          } else {
            setEmptyErr(false);
          }
          break;
  
        // Проверка на минимальную длину
        case 'minLength':
          if (value.length < validations[validation] && value) {
            setMinLengthErr(true);
            setErrorText(`${resources_ru.input_minLength_err}${validations[validation]}`);
          } else {
            setMinLengthErr(false);
          }
          break;
  
        // Проверка на максимальную длину
        case 'maxLength':
          if (value.length > validations[validation]) {
            setMaxLengthErr(true);
            setErrorText(`${resources_ru.input_maxLength_err}${validations[validation]}`);
          } else {
            setMaxLengthErr(false);
          }
          break;

        // Проверка на соответствие сущности
        case 'type':
          switch (validations[validation]) {
            case 'email':
              const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (!emailRegex.test(value.toLowerCase()) && value) {
                setTypeError(true);
                setErrorText(`${resources_ru.input_type_err}${validations[validation]}`);
              } else {
                setTypeError(false);
              }
              break;
          
            default:
              break;
          }
          break;
      
        default:
          break;
      };
    };
  }, [value, validations]);

  // Глобальная проверка на валидность инпута
  useEffect(() => {
    setIsValid(
      !isEmptyErr &&
      !minLengthErr &&
      !maxLengthErr &&
      !typeError
    );
  }, [isEmptyErr, minLengthErr, maxLengthErr, typeError])

  return {
    isEmptyErr,
    minLengthErr,
    maxLengthErr,
    errorText,
    isValid
  };
})

// React

export default useInputValidation;