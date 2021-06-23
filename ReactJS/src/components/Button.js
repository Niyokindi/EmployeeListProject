import React from 'react'

const Button = ({text, onClick, id, className}) => {
    return (
        <button id = {id} className= {className} style={{fontSize: "9px"}}onClick = {onClick}>{text}</button>
    )
}

export default Button
