import React, {Component} from 'react';

const Scroll = (props) =>{
    return(
        <div style={{overflowY:'scroll', borderTop:'solid black 3px', marginTop:'20px', height:'560px'}}>
            {props.children}
        </div>
    )
}

export default Scroll