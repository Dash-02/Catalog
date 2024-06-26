import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import style from './Search.module.scss'
import iconSearch from '../../assets/icons/search.svg';

function Search() {

    // const [inputText, setInputText] = useState('');
    // const dispatch = useDispatch();

    // const { books, counter, isLoading, error, searchValue, index, sortType, categories } = useSelector(
	// 	state => state.book
	// )
	// const getDataInput = (e) => {
	// 	e.preventDefault()
	// 	dispatch(setClearBooks())
	// 	dispatch(setIndex())
	// 	dispatch(setSearchValue(inputDate))
	// 	dispatch(setCounter())
	// 	dispatch(fetchBooks({counter, searchValue, index, sortType, categories }))
	// }
	// const onChangeText = (e) => {
	// 	setInputText(e.target.value)
	// }

    return(
        <div className={style.search}>
            <img className={style.img_search} src={iconSearch} alt="search" />
            <input 
                type="text" 
                // onChange={(e) => onChangeText(e)} 
                placeholder='Поиск' 
            />
        </div>
    );
}

export default Search;