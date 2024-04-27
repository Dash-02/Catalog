import React from 'react';
import './Search.css';

import iconSearch from '../../assets/search.svg';

function Search() {
    return(
        <div className='search'>
            <img className='img-search' src={iconSearch} alt="search" />
            <input type="text" placeholder='Поиск' />
        </div>
    );
}

export default Search;