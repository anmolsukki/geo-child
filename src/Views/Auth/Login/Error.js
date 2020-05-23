import React from 'react';
import AuthClass from '../Auth.module.css';

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className={`${AuthClass.formMessage} ${AuthClass.invalid}`}></div>;
  }
  if (message) {
    return <div className={`${AuthClass.formMessage} ${AuthClass.invalid}`}>{message}</div>;
  }
  return <div className={`${AuthClass.formMessage} ${AuthClass.valid}`}>all good</div>;
};

export default Error;
