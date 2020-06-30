import React from 'react';
import './index.css';

const PostCard=(props)=>{
    return (
        <div className='card'>
            <p><strong>Id</strong>    :  {props.id}</p>
            <p><strong>Title</strong> :  {props.title}</p>
            <p><strong>Body</strong>  :  {props.body}</p>
            <button style={{color:'red'}} onClick={props.deleteHandler}>delete</button>
        </div>
    );
}

export default PostCard;