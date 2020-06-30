import React from 'react';

const ToDoMessage=(props)=>{
    //console.log(props);
    let display=<h2>{props.message}</h2>;
    if(props.finished){
        display=<h2 style={{textDecoration:'line-through'}}>{props.message}</h2>;
    }
    return <div>{display}</div>
}

export default ToDoMessage;