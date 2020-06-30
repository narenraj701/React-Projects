import React from 'react';

function Char(props){
let style={
display:'inline-block',
padding:'16px',
border:'2px solid red',
margin:'5px',
textAlign:'center'
}
return <div style={style}>{props.toprint}</div>;
}

export default Char;