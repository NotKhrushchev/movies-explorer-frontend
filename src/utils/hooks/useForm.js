import { useState } from "react"

// Хук для заполенения формы
const useForm = (initialValue) => {
  const [formValue, setFormValue] = useState(initialValue);

   // Меняю состояние формы на каждый ввод
  const handleFormChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  return {
    formValue,
    handleFormChange
  };
}

export default useForm;