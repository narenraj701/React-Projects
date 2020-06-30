import React,{useState} from 'react';

const useCounter=(init=0,step)=>{
    const [counter,setCount]=useState(init);
    const incrementHandler=()=>setCount(prevState=>prevState+step)
    const decrementHandler=()=>setCount(prevCount=>prevCount-step);
    const reset=()=>setCount(init);
    return (
    <div>
        {counter}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
    )
}

export  default useCounter;