import React from 'react'
import { Button } from '@material-ui/core';

const DeleteButton = (props) => {
    return <Button color='secondary' variant='contained' onClick={props.delete} >Delete</Button>
}


export default DeleteButton;