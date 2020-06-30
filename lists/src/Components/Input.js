import React from 'react'

function Input(props){
    return <input type='text' onChange={props.changed} />
}

export default Input;