import React from 'react';
import '../../index.css';

const Option=props=><button className='option' onClick={props.clicked}>{props.option}</button>;

export default Option;