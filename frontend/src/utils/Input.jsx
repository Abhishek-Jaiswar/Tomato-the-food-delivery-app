import React from "react";

const Input = ({ type, placeholder, value, onChange, className, name }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};

export default Input;
