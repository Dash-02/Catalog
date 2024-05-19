import { useState } from 'react'
import DropDowmEditor from '../DropDownEditor/DropDownEditor.jsx';
import style from './Editor.module.scss';

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

                {/* ======= Block 2 costAdvertising ======= */}
                <div className={style.costAdvertising}>
                    <span className={style.paramsHeader}>
                        Стоимость рекламы на обычных условиях
                    </span>
                    <div className={style.advertisingContent}>
                        <div className={style.item}>
                            <span>1</span>
                            <div className={style.advertisingItem}>
                                <label htmlFor="costAdver">
                                    <input 
                                        type="text" 
                                        id='costAdver'
                                    />
                                </label>
                                <span>
                                    1/24
                                </span>
                                <button className={style.costBtn}>
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