import React from 'react';
import Message from '../Atoms/ToDoMessage';
import Due from '../Atoms/Due';
import Mark from '../Atoms/MarkButton';
import Delete from '../Atoms/DeleteButton';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        display: 'inline-block',
        margin: 10,
        width: 390,
        height: 240,
        padding: 5,
        boxShadow: '5px 5px 10px grey',
        textAlign: 'center',
    },
    position: {
        position: 'absolute',
        bottom: '10px',
        right: '60px'
    }
});

const ToDoCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent >
                <Message message={props.message} finished={props.completed} />
                <Due due={props.due} />
            </CardContent>
            <CardActions className={classes.position}>
                <Mark disabled={props.completed} disableit={props.disableit} />
                <Delete delete={props.delete} />
            </CardActions>
        </Card>

    )
}

export default ToDoCard;