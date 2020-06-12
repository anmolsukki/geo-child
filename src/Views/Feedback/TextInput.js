import React from 'react';

export const TextInput = ({ type, mainClass, className, value, name, onChange, label }) => {
  return (
    <div className={mainClass}>
      <label className="control-label">{label}</label>
      <div className="controls">
        <input type={type} className={className} value={value} name={name} onChange={onChange} />
      </div>
    </div>
  );
};
