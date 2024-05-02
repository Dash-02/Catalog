import React, {useState} from 'react';

import './Filters.css';
import icoFilter from '../../assets/icons/filter.svg';
import icoPoly from '../../assets/icons/polygon.svg';
import icoReload from '../../assets/icons/reload.svg';

function Filter() {

    let minCost = 0;
    let maxCost = 1000;

    return(
        <div className='filter'>
            <div className="filter_wrapper">
                <div className="filter_block">
                    <div className="filter_item">
                        <span>Категория канала</span>
                        <button className='filt_btn' >
                            Не выбрано
                            <img src={icoPoly} alt="" />
                        </button>
                        <button className='reload_btn'>
                            <img src={icoReload} alt="" />
                        </button>
                    </div>

                    <div className="filter_item">
                        <span>Язык канала</span>
                        <button className='filt_btn' >
                            Не выбрано
                            <img src={icoPoly} alt="" />
                        </button>
                        <button className='reload_btn'>
                            <img src={icoReload} alt="" />
                        </button>
                    </div>
                </div>

                <div className="filter_block">
                    <div className="filter_item">
                        <span>Стоимость</span>
                        
                        <div className="filter_content">
                            <label className="label_wrapper">
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className="label_wrapper">
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className='reload_btn'>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>

                    </div>

                    <div className="filter_item">
                        <span>CPM</span>
                        
                        <div className="filter_content">
                            <label className="label_wrapper">
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className="label_wrapper">
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className='reload_btn'>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>

                    </div>
                </div>

                <div className="filter_block">
                    <div className="filter_item">
                        <span>Подписчиков</span>
                        
                        <div className="filter_content">
                            <label className="label_wrapper">
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className="label_wrapper">
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className='reload_btn'>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>

                    </div>

                    <div className="filter_item">
                        <span>Просмотров на пост</span>
                        
                        <div className="filter_content">
                            <label className="label_wrapper">
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className="label_wrapper">
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className='reload_btn'>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>
                        
                    </div>

                    <div className="filter_item">
                        <span>Вовлеченность (ERR)</span>
                        
                        <div className="filter_content">
                            <label className="label_wrapper">
                                <span>от</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                            <label className="label_wrapper">
                                <span>до</span>
                                <input type="number" min={minCost} max={maxCost}/>
                            </label>
                    
                            <button className='reload_btn'>
                                <img src={icoReload} alt="" />
                            </button>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
            <img className='filter_ico' src={icoFilter} alt="filter" />
        </div>
    );
}

export default Filter;