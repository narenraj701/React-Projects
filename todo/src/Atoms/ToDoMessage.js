import React from 'react';
import Typography from '@material-ui/core/Typography';
const ToDoMessage = (props) => {
    let display = <Typography variant="h4" data-testid="ToDoMessage">{props.message}</Typography>;
    if (props.finished) {
        display = <Typography variant="h4" data-testid="ToDoMessage" style={{ textDecoration: 'line-through' }}>{props.message}</Typography>;
    }
    return <div>{display}</div>
}
export default ToDoMessage;