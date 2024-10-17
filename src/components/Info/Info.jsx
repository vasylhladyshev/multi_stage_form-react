import "./Info.css";
import { useEffect, useState } from "react";

const Info = ({ setIsButtonDisabled, isButtonDisabled, name, setName, email, setEmail, number, setNumber, nameError, setNameError, emailError, setEmailError, numberError, setNumberError }) => {
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "number":
        setNumberDirty(true);
        break;
      default:
        return;
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    const pattern = /^(?![-_])([a-zA-Z0-9_-]{3,20})(?<![-_])$/;
    if (!pattern.test(event.target.value)) {
      setNameError("Invalid name format.");
    } else {
      setNameError("");
    }
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(String(event.target.value).toLowerCase())) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
    const pattern =
      /^\+?\d{1,4}?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (!pattern.test(event.target.value)) {
      setNumberError("Invalid phone number format");
    } else {
      setNumberError("");
    }
  };

  useEffect(() => {
    if (!nameError && !emailError && !numberError) {
      setIsButtonDisabled(false);
      setNameError('')
      setEmailError('')
      setNumberError('')
      
    } else {
      setIsButtonDisabled(true);
      
    }
  }, [nameError, emailError, numberError]);

  return (
    <div className="info">
      <h1 className="title">Personal info</h1>
      <p className="description">
        Please provide your name, email adress, and phone number.
      </p>
      <div className="field">
        <label className="field-label">Name</label>
        <input
          onBlur={(e) => blurHandler(e)}
          name="name"
          value={name}
          onChange={handleNameChange}
          className="field-input"
          type="text"
          placeholder="e.g. Stephen King"
        ></input>
        {nameDirty && nameError && <div className="error">{nameError}</div>}
      </div>
      <div className="field">
        <label className="field-label">Email Address</label>
        <input
          onBlur={(e) => blurHandler(e)}
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="field-input"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        ></input>
        {emailDirty && emailError && <div className="error">{emailError}</div>}
      </div>
      <div className="field">
        <label className="field-label">Phone Number</label>
        <input
          onBlur={(e) => blurHandler(e)}
          name="number"
          value={number}
          onChange={handleNumberChange}
          className="field-input"
          type="tel"
          placeholder="e.g. +1 234 567 890"
        ></input>
        {numberDirty && numberError && (
          <div className="error">{numberError}</div>
        )}
      </div>
      {isButtonDisabled && <div className="button-disabled-alarm">Please complete all required fields.</div>}
    </div>
  );
};

export default Info;
