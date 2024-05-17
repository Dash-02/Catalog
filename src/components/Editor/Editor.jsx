import { useState } from 'react'
import DropDowmFilt from '../DropDownFilt/DropDownFilt.jsx';
import style from './Editor.module.scss';

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
                <img src="" alt="" />
                <span>Advix: новости</span>
                {/* <img src="" alt="" /> //должно пропадать когда выполнены условия */}
                <button className={style.btnPublish}>
                    ОПУБЛИКОВАТЬ
                </button>
                <button className={style.btnDraft}>
                    ЧЕРНОВИК
                </button>
            </header>

            {/* ======= Block 1 ======= */}
            <div className={style.editorContent}>
                <div className={style.paramsChannel}>
                    <span>
                        Параметры канала
                    </span>
                    <div className={style.paramsContent}>

                        <div className={style.item}>
                            <span>Обложка</span>
                            <button className={style.reloadBtn}>
                                <img src="" alt="" />
                            </button>
                            <button>
                                Загрузить
                            </button>
                        </div>

                        <div className={style.item}>
                            <span>Категория</span>
                            <DropDowmFilt default_arg={default_argCategory} args={categoryList}/>
                        </div>

                        <div className={style.item}>
                            <span>Язык</span>
                            <DropDowmFilt default_arg={default_argLang} args={langList}/>
                        </div>

                        <div className={style.item}>
                            <span>Описание</span>
                            <button className={style.reloadBtn}>
                                <img src="" alt="" />
                            </button>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        
                        {/* ======= Block 2 ======= */}

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}