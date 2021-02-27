import React from 'react';
import 'tachyons'; 


const SearchBox = ({SearchField, searchChange}) =>{
    return(
        <div>
            <input
             type='search'
             placeholder='Search for a robot' 
             onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;