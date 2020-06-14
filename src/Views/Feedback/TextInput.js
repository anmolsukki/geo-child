import React from 'react';

export const TextInput = ({ type, mainClass, className, value, name, onChange, label }) => {
  return (
    <div className={mainClass}>
      <label className="feedback-control-label">{label}</label>
      <div className="feedback-controls">
        <input type={type} className={className} name={name} onChange={onChange} />
      </div>
    </div>
  );
};
