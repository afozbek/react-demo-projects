import React from 'react';

const FormControl = ({
  id,
  labelName,
  type,
  placeholder,
  isRequired,
  changeHandler,
  value,
}) => {
  return (
    <div className="m-linkForm__group">
      <label htmlFor={id} data-test>
        {labelName}
      </label>
      <input
        id={id}
        data-id="test"
        className="m-linkForm__input"
        placeholder={placeholder}
        type={type}
        required={isRequired}
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default FormControl;
