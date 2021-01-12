import React from 'react';

export default function score(props) {
    return (
        <div id="score" >
            <p>User: {props.usersScore}</p>
            <p>Computer: {props.computersScore}</p>
        </div>
    )
}
