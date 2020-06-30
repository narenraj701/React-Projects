import React,{useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
  const Button=styled.button`
    background-color:#4CAF50;
    border: none;
    border-radius: 4px;
    color: white;
    margin: 5px;
    width: 140px;
    height: 30px;`;
const AddToDo=(props)=>{
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
    
    return <div>
        <h1 style={{ textAlign: 'center' }}>Add A To Do</h1>
        <input type='text' placeholder='enter a to do task' style={{width:'100%',height:'20px'}} onChange={(event)=>setMessage(event.target.value)} /><br /><br />
        <input type='text' placeholder='enter due date'  style={{width:'100%',height:'20px'}} onChange={(event)=>setDate(event.target.value)}/><br /><br />
        <Button  onClick={postHandler} message={message} date={date}>Submit</Button>
    </div> 
}

export default AddToDo; 