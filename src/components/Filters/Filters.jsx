import React, {useState} from 'react';

import style from './Filters.module.scss';
import icoFilter from '../../assets/icons/filter.svg';
import icoPoly from '../../assets/icons/polygon.svg';
import icoReload from '../../assets/icons/reload_.svg';
import icoHeart from '../../assets/icons/favorite_heart.svg';
import icoLock from '../../assets/icons/lock_open.svg';
import icoVerify from '../../assets/icons/check_verify.svg';

function Filter() {

    let minCost = 0;
    let maxCost = 1000;

    return(
        <div className={style.filter}>
            <div className={style.filter_wrapper}>

                {/*=========== Block 1 ===========*/}
                <div className={style.filter_block}>
                    <div className={style.filter_item}>
                        <span>Категория канала</span>
                        <button className={style.filt_btn} >
                            Не выбрано
                            <img src={icoPoly} alt="" />
                        </button>
                        <button className={style.reload_btn}>
                            <img src={icoReload} alt="" />
                        </button>
                    </div>

                    <div className={style.filter_item}>
                        <span>Язык канала</span>
                        <button className={style.filt_btn} >
                            Не выбрано
                            <img src={icoPoly} alt="" />
                        </button>
                        <button className={style.reload_btn}>
                            <img src={icoReload} alt="" />
                        </button>
                    </div>
                </div>

                {/*=========== Block 2 ===========*/}
                <div className={style.filter_block}>
                    <div className={style.filter_item}>
                        <span>Стоимость</span>
                        
                        <div className={style.filter_content}>
                            <label className={style.label_wrapper}>
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className={style.label_wrapper}>
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className={style.reload_btn}>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>

                    </div>

                    <div className={style.filter_item}>
                        <span>CPM</span>
                        
                        <div className={style.filter_content}>
                            <label className={style.label_wrapper}>
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className={style.label_wrapper}>
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className={style.reload_btn}>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>

                    </div>
                </div>

                {/*=========== Block 3 ===========*/}
                <div className={style.filter_block}>
                    <div className={style.filter_item}>
                        <span>Подписчиков</span>
                        
                        <div className={style.filter_content}>
                            <label className={style.label_wrapper}>
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className={style.label_wrapper}>
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className={style.reload_btn}>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>

                    </div>

                    <div className={style.filter_item}>
                        <span>Просмотров на пост</span>
                        
                        <div className={style.filter_content}>
                            <label className={style.label_wrapper}>
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className={style.label_wrapper}>
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className={style.reload_btn}>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>
                        
                    </div>

                    <div className={style.filter_item}>
                        <span>Вовлеченность (ERR)</span>
                        
                        <div className={style.filter_content}>
                            <label className={style.label_wrapper}>
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className={style.label_wrapper}>
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className={style.reload_btn}>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>
                    </div>
                    
                </div>

                {/*=========== Block 4 ===========*/}
                <div className={style.filter_block}>
                    <div className={style.wrapper_radio_btn}>
                        <input type="radio" id="btn_radio" />
                        <label for="btn_radio" className={style.label_radio}>
                            В избранном
                            <img src={icoHeart} alt="" />
                        </label>
                    </div>

                    <div className={style.wrapper_radio_btn}>
                        <input type="radio" id="btn_radio" />
                        <label for="btn_radio" className={style.label_radio}>
                            Администратор онлайн
                            <div className={style.round}></div>
                        </label>
                    </div>

                    <div className={style.wrapper_radio_btn}>
                        <input type="radio" id="btn_radio" />
                        <label for="btn_radio" className={style.label_radio}>
                            Открытый канал
                            <img src={icoLock} alt="" />
                        </label>
                    </div>

                    <div className={style.wrapper_radio_btn}>
                        <input type="radio" id="btn_radio" />
                        <label for="btn_radio" className={style.label_radio}>
                            Верифицированный канал
                            <img src={icoVerify} alt="" />
                        </label>
                    </div>

                    <div className={style.wrapper_radio_btn}>
                        <input type="radio" id="btn_radio" />
                        <label for="btn_radio" className={style.label_radio}>
                            Проверенный канал
                        </label>
                    </div>
                        
                </div>

                {/*=========== Block 5 ===========*/}

            </div>
            <img className={style.filter_ico} src={icoFilter} alt="filter" />
        </div>
    );
}

export default Filter;