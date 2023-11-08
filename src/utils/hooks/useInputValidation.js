import { useEffect, useState } from "react";
import { resources_ru } from "../../translations/resources_ru";
import validator from "validator";

// Хук валидации инпута
const useInputValidation = ((value, validations) => {
  
  const [isValid, setIsValid] = useState(false);
  const [isEmptyErr, setEmptyErr] = useState(false);
  const [minLengthErr, setMinLengthErr] = useState(false);
  const [maxLengthErr, setMaxLengthErr] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
  
        // Проверка на пустое поле
        case 'required':
          if (!value) {
            setEmptyErr(true);
            setErrMessage(resources_ru.input_empty_err);
          } else {
            setEmptyErr(false);
          }
          break;
  
        // Проверка на минимальную длину
        case 'minLength':
          if (value?.length < validations[validation] && value) {
            setMinLengthErr(true);
            setErrMessage(`${resources_ru.input_minLength_err} ${validations[validation]}`);
          } else {
            setMinLengthErr(false);
          }
          break;
  
        // Проверка на максимальную длину
        case 'maxLength':
          if (value?.length > validations[validation]) {
            setMaxLengthErr(true);
            setErrMessage(`${resources_ru.input_maxLength_err} ${validations[validation]}`);
          } else {
            setMaxLengthErr(false);
          }
          break;

        // Проверка на соответствие сущности
        case 'type':
          switch (validations[validation]) {
            case 'email':
              const isEmailValid = validator?.isEmail(String(value));
              if (!isEmailValid && value) {
                setTypeError(true);
                setErrMessage(`${resources_ru.input_type_err} ${validations[validation]}`);
              } else {
                setTypeError(false);
              }
              break;

            case 'name':
              const nameRegEx = /^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\-\s]*$/;
              const isNameValid = nameRegEx.test(value);
              if (!isNameValid && value) {
                setTypeError(true);
                setErrMessage(`${resources_ru.input_type_err} имя`);
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
    errMessage,
    isValid
  };
})

// React

export default useInputValidation;