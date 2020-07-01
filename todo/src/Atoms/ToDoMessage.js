import React from 'react';
import Typography from '@material-ui/core/Typography';
const ToDoMessage = (props) => {
    //console.log(props);
    let display = <Typography variant="h4">{props.message}</Typography>;
    if (props.finished) {
        display = <Typography variant="h4" style={{ textDecoration: 'line-through' }}>{props.message}</Typography>;
    }
    return <div>{display}</div>
}

export default ToDoMessage;