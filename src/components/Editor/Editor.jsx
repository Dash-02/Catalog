import { useState } from 'react'

import style from './Editor.module.scss';

export const Editor = () => {

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
                            <button>
                                Не выбрано
                            </button>
                        </div>

                        <div className={style.item}>
                            <span>Язык</span>
                            <button>
                                Не выбрано
                            </button>
                        </div>

                        <div className={style.item}>
                            <span>Описание</span>
                            <button className={style.reloadBtn}>
                                <img src="" alt="" />
                            </button>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}