import { useState } from "react";

const UseInput = (validateFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateFn(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid: valueIsValid,
    hasError: hasError,
    inputChangeHandler: inputChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default UseInput;
