import { useState } from 'react'

import style from './Switcher.module.scss';
import moon from '../../assets/icons/moon2.svg'
import sun from '../../assets/icons/sun1.svg'

export const SwitchButton = () => {
  
    const [checked, setChecked] = useState(true)
  
    const handleChange = () => {
      setChecked(!checked)
    }

  return (
    <>
        {/* <div className={style.switchWrapper}>
            <img src={moon} alt="" />
            <img src={sun} alt="" />
            <input 
                type="radio" 
                id="switchElement"
                className={style.moon} 
                checked={checked}
                onChange={handleChange}
            />
        </div> */}
        <label htmlFor='switch' className={style.switchWrapper}>
          <input 
            type='checkbox' 
            id='switch'
            className={style.round}
            checked={checked}
            onChange={handleChange}
          />
          {/* <label htmlFor="switch" className={style.switchLabel}></label> */}
          {/* <input 
            type="radio" 
            className={style.sun}
            checked={checked}
            onChange={handleChange}
          /> */}
        </label>
    </>
  )
}
