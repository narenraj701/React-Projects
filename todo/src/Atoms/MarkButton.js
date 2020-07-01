import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: 'green',
        margin: '5px',
        '&:hover': {
            opacity: 0.8,
            color: 'white',
            backgroundColor: 'green'
        }
    }
}));


const MarkButton = (props) => {
    const classes = useStyles();
    //let classname=props.disabled?"b1 disabled":"b1";   
    return (
        <Button
            variant='contained'
            //style={props.disabled?disabled:b1}
            className={classes.root}
            disabled={props.disabled}
            style={props.disabled ? { opacity: '0.6', cursor: 'not-allowed' } : null}
            onClick={props.disableit}>Mark as completed</Button>
    )
}

export default MarkButton;