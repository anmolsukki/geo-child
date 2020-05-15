import React from 'react';
import LoginClass from './Login.module.css';

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className={`${LoginClass.formMessage} ${LoginClass.invalid}`}></div>;
  }
  if (message) {
    return <div className={`${LoginClass.formMessage} ${LoginClass.invalid}`}>{message}</div>;
  }
  return <div className={`${LoginClass.formMessage} ${LoginClass.valid}`}>all good</div>;
};

export default Error;
