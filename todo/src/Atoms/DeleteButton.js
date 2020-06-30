import React from 'react'
import styled from 'styled-components'
const Button=styled.button`
    background-color:#f44336;
    border: none;
    border-radius: 4px;
    color: white;
    margin: 5px;
    width: 140px;
    height: 30px;`;
const DeleteButton=(props)=>{
    //console.log(props.delete);
    return <Button onClick={props.delete} >Delete</Button>
}


export default DeleteButton;