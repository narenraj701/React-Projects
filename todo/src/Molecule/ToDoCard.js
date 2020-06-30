import React from 'react';
import Message from '../Atoms/ToDoMessage';
import Due from '../Atoms/Due';
import Mark from '../Atoms/MarkButton';
import Delete from '../Atoms/DeleteButton';
import styled from 'styled-components';
const Card=styled.div`
        display: inline-block;
        width: 40%;
        border:none;
        margin: 5px;
        padding: 10px;
        border-radius: 3px;
        box-shadow: 5px 10px 8px #888888;`;

const ToDoCard=(props)=>{
    
    return (<Card>
                <Message message={props.message} finished={props.completed}/>
                <Due due={props.due}/>
                <Mark disabled={props.completed} disableit={props.disableit} />
                <Delete delete={props.delete}/>
            </Card>
    )
}

export default ToDoCard;