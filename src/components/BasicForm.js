import UseInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    valueIsValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    inputChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameInputReset,
  } = UseInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputReset,
  } = UseInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = UseInput((value) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(value);
  });

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const formIsValid =
    enteredFirstNameIsValid && enteredEmailIsValid && enteredLastNameIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    firstNameInputReset();
    emailInputReset();
    lastNameInputReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <span className="error-text">Please enter a valid Name</span>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <span className="error-text">Please enter a valid Last Name</span>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <span className="error-text">Please enter a valid E-mail</span>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
