import { useState } from 'react'
import DropDowmEditor from '../DropDownEditor/DropDownEditor.jsx';
import { sortedPriceObjects } from '../Sorting/Sorting'
import style from './Editor.module.scss';

import {element} from '../FakeData/FakeData.js';
import iconAdvix from '../../assets/img/advix_photo.png';

export const Editor = () => {

    const categoryList = [
        'Telegram', 
        'Новости и СМИ', 
        'Литература', 
        'Криптовалюта', 
        'Искусство', 
        'Путешествия', 
        'Юмор и приколы'
    ];
    const default_argCategory = 'Не выбрано';
    
    const langList = [
        'Русский', 
        'Английский', 
        'Арабский'
    ];
    const default_argLang = 'Не выбрано';

    // sale in block 2
    const [clicked, setClicked] = useState(false)
    const [indexY, setIndexY] = useState(0)
    const [clickedTypePrice, setClickedTypePrice] = useState({
        24: false,
        48: false,
        72: false,
        0: false,
        1: false,
        2: false,
    })
    
    const handleClickedTypePrice = (key, index) => {
        setClickedTypePrice(prevState => {
            setIndexY(index)
            let newState = {
                24: false,
                48: false,
                72: false,
                0: false,
                1: false,
                2: false,
            }
            newState[key] = true
            return newState
        })
    }

  return (
    <>
        <div className={style.editor}>
            <header className={style.headerEditor}>
                <div className={style.logoEditor}>
                    <img src={iconAdvix} alt="" />
                    <span>Advix: новости</span>
                </div>
                {/* <img src={} alt="" /> //должно пропадать когда выполнены условия */}
                <div className={style.headerBtn}>
                    <button className={style.btnPublish}>
                        ОПУБЛИКОВАТЬ
                    </button>
                    <button className={style.btnDraft}>
                        ЧЕРНОВИК
                    </button>
                </div>
            </header>
            
            <div className={style.editorContent}>
                 
                {/* ======= Block 1 paramsChannel ======= */}
                <div className={style.paramsChannel}>
                    <span className={style.paramsHeader}>
                        Параметры канала
                    </span>
                    <div className={style.paramsContent}>

                        <div className={style.item}>
                            <span>Обложка</span>
                            <button className={style.reloadBtn}>
                                <img src="" alt="" />
                            </button>
                            <button className={style.btnDownload}>
                                Загрузить
                            </button>
                        </div>

                        <div className={style.item}>
                            <span>Категория</span>
                            <DropDowmEditor default_arg={default_argCategory} args={categoryList}/>
                        </div>

                        <div className={style.item}>
                            <span>Язык</span>
                            <DropDowmEditor default_arg={default_argLang} args={langList}/>
                        </div>

                        <div className={style.item}>
                            <span>Описание</span>
                            <button className={style.reloadBtn}>
                                <img src="" alt="" />
                            </button>
                            <textarea className={style.description} name="" id="" cols="5" rows="5"></textarea>
                        </div>

                    </div>
                </div>

                {/* ======= element 1 Block 2 costAdvertising ======= */}
                <div className={style.costAdvertising}>
                    <span className={style.paramsHeader}>
                        Стоимость рекламы на обычных условиях
                    </span>
                    <div className={style.advertisingContent}>
                        <div className={style.itemAdv}>
                            <span className={style.number}>1</span>
                            <div className={style.advertisingItem}>
                                <label htmlFor="costAdver">
                                    <input 
                                        type="number" 
                                        id='costAdver'
                                        className={style.inputCost}
                                        placeholder='Введите стоимость'
                                    />
                                </label>
                                <button className={style.btnSale}>
                                    1/24
                                </button>
                                <button className={style.btnCost}>
                                    СОХРАНИТЬ
                                </button>
                            </div>
                        </div>
                    </div>
                
                
                {/* ====== element 2 block 2 ====== */}
                <div className={style.advertisingContent}>
                    <div className={style.itemAdv}>
                        <span className={style.number}>2</span>
                        <div className={style.advertisingItem}>
                            <label htmlFor="costAdver">
                                <input 
                                    type="number" 
                                    id='costAdver'
                                    className={style.inputCost}
                                    placeholder='Введите стоимость'
                                />
                            </label>
                                
                            <div className={style.priceType}>
				                {sortedPriceObjects(element[0].priceObjects).map(
					                (time, index) =>
						                time.hot === false && (
							                <button
								                key={index}
								                className={
									            clickedTypePrice[time.time]
										            ? style.clickedBtn
										            : style.nonClickedButton
								                }
								                onClick={() => handleClickedTypePrice(time.time, index)}
							                >
								                {time.time === 24 && '1/24'}
								                {time.time === 48 && '1/48'}
								                {time.time === 72 && '1/72'}
								                {time.time === 0 && 'натив'}
								                {time.time === 1 && 'репост'}
								                {time.time === 2 && 'б/уд'}
								                {time.hot_date}
							                </button>
						                )
				                )}
			                </div>
                            <button className={style.btnCost}>
                                СОХРАНИТЬ
                            </button>
                        </div>
                    </div>
                </div>                

            {/* ====== element 3 block 2 ====== */}
            <div className={style.advertisingContent}>
                    <div className={style.itemAdv}>
                        <span className={style.number}>3</span>
                        <div className={style.advertisingItem}>
                            <label htmlFor="costAdver">
                                <input 
                                    type="number" 
                                    id='costAdver'
                                    className={style.inputCost}
                                    placeholder='Введите стоимость'
                                />
                            </label>
                                
                            <div className={style.priceType}>
				                {sortedPriceObjects(element[0].priceObjects).map(
					                (time, index) =>
						                time.hot === false && (
							                <button
								                key={index}
								                className={
									            clickedTypePrice[time.time]
										            ? style.clickedBtn
										            : style.nonClickedButton
								                }
								                onClick={() => handleClickedTypePrice(time.time, index)}
							                >
								                {time.time === 24 && '1/24'}
								                {time.time === 48 && '1/48'}
								                {time.time === 72 && '1/72'}
								                {time.time === 0 && 'натив'}
								                {time.time === 1 && 'репост'}
								                {time.time === 2 && 'б/уд'}
								                {time.hot_date}
							                </button>
						                )
				                )}
			                </div>
                            <button className={style.btnCost}>
                                СОХРАНИТЬ
                            </button>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </>
  )
}