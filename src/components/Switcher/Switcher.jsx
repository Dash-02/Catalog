import { useState } from 'react'

import style from './Switcher.module.scss';

export const SwitchButton = () => {
  
    const [checked, setChecked] = useState(false)
  
    const handleChange = () => {
      setChecked(!checked)
    }

  return (
    <>
      <label htmlFor='switch' className={style.switchWrapper}>
        <input 
          type='checkbox' 
          id='switch'
          className={style.round}
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </>
  )
}
