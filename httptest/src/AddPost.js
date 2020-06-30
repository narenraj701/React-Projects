import React,{useState} from 'react';
import axios from 'axios';
import './index.css'
const AddPost=()=>{
    const [id,setId]=useState("");
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const postHandler=()=>{
        const data={
            userId:id,
            title:title,
            body:body
        }
        axios.post("https://jsonplaceholder.typicode.com/posts",data)
        .then(response=>console.log(response));

    }
    return(
        <div className="addPost">
            <h1>Add A Post</h1>
            <p>Id:<input type='text' value={id} onChange={(event)=>setId(event.target.value)}></input></p>
            <p>Title:<input type='text' value={title} onChange={(event)=>setTitle(event.target.value)}></input></p>
            <p>Body:<input type='text'  value={body} onChange={(event)=>setBody(event.target.value)}></input></p>
            <button onClick={postHandler} id={id} title={title} body={body}>Submit</button>
        </div>
    )
}

export default AddPost;