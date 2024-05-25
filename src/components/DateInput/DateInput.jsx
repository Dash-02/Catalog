import React from 'react';
import InputMask from 'react-input-mask';

import style from './DateInput.module.scss';

const DateInput = ({ value, onClick, onChange }) => (
  <InputMask
    mask="99.99.9999"
    value={value}
    onChange={onChange}
    onClick={onClick}
    className={style.dateInput}
  >
    {(inputProps) => <input {...inputProps} />}
  </InputMask>
);

export default DateInput