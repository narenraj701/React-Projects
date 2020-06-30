import React from 'react'
import styled from 'styled-components';

const Button=styled.button`
    background-color:#4CAF50;
    border: none;
    border-radius: 4px;
    color: white;
    margin: 5px;
    width: 140px;
    height: 30px;`
const MarkButton=(props)=>{
    //let classname=props.disabled?"b1 disabled":"b1";   
    return (
        <Button 
        //style={props.disabled?disabled:b1}
        //className={classname} 
        disabled={props.disabled}
        style={props.disabled?{opacity:'0.6',cursor:'not-allowed'}:null} 
        onClick={props.disableit}>Mark as completed</Button>
       ) 
}

export default MarkButton;