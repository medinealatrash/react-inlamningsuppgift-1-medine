import React from 'react';
import './App.css'

export default function button(props) {
    return (
        <div className="btn" >
            <button onClick={ props.start}  >{props.textStart} </button>
            <button onClick={props.reloadPage} >{props.textReload}</button>
        </div>
    )
}
