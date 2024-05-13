import { useState } from 'react'

import style from './Switcher.module.scss';
import moon from '../../assets/icons/moon2.svg'
import sun from '../../assets/icons/sun1.svg'

export const SwitchButton = () => {
  
    const [checked, setChecked] = useState(true)
  
    const handleChange = nextChecked => {
        setChecked(nextChecked)
    }

  return (
    <>
        <div htmlFor='switchElement' className={style.switchWrapper}>
            {/* <img src={moon} alt="" />
            <img src={sun} alt="" /> */}
            <input 
                type="radio" 
                id="switchElement"
                className={style.moon} 
                checked={checked}
                onChange={handleChange}
            />
        </div>
      {/* <label htmlFor='small-radius-switch'>
        <Switch
          checked={checked}
          onChange={handleChange}
          handleDiameter={19}
          offColor='#212121'
          onColor='#DEDEDE'
          offHandleColor='#DEDEDE'
          onHandleColor='#212121'
          height={24}
          width={46}
          borderRadius={20}
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: 'orange',
                paddingRight: 2,
              }}
            ></div>
          }
          checkedIcon={''}
          uncheckedHandleIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 20,
              }}
            >
              <img
                width={20}
                height={20}
                style={{ borderRadius: 20 }}
                src={moon}
                alt=''
                srcset=''
              />
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: '100%',
              }}
            >
              <img width={19} height={16} src={sun} alt='' srcset='' />
            </div>
          }
          className='react-switch'
          id='small-radius-switch'
        />
      </label> */}
    </>
  )
}
