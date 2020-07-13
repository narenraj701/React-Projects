import React,{useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles'
import {Button, Typography} from '@material-ui/core';

const useStyles=makeStyles((theme) => ({
    root: {
      color:'white',
      backgroundColor:'green',
      margin:'5px',
      '&:hover':{
        opacity:0.8,
        color:'white',
        backgroundColor:'green'
      }
    },
    position:{
        textAlign:'center'
    },
    inputstyle:{
        width:'50%',
        height:'30px'
    },
}));

const AddToDo=(props)=>{
    const classes=useStyles();
    const [message,setMessage]=useState("");
    const [date,setDate]=useState("");
    const postHandler=()=>{
        const data={
            message:message,
            date:date,
            completed:false
        }
        axios.post("/api/messages",data)
        .then(response=>{
            window.location.reload(false);
        }).catch(error=>console.log(error));
    }
    
    return <div className={classes.position}>
        <Typography variant='h3' >Add A To Do</Typography>
        <input type='text' value={props.message} required placeholder='enter a to do task' className={classes.inputstyle}  onChange={(event)=>setMessage(event.target.value)} /><br /><br />
        <input type='text' value={props.due} required placeholder='enter due date'  className={classes.inputstyle} onChange={(event)=>setDate(event.target.value)}/><br /><br />
        <Button  className={classes.root} onClick={postHandler} message={message} date={date}>Submit</Button>
    </div> 
}

export default AddToDo; 