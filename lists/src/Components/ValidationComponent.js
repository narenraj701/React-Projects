import React from 'react';

function ValidationComponent(props){
    let message=null;
    if(props.len<=5){
        message="Too Short";
    } 
    else if(props.len>=10){
        message="Too Long";
    }
    return <p>{message}</p>;
}

export default ValidationComponent;