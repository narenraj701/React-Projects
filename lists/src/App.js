import React from 'react';
import './App.css';
import InputComp from './Components/Input';
import ValidationComponent from './Components/ValidationComponent';
import Char from './Components/Char';
class App extends React.Component {
  state={
    len:0,
    val:null
  }
  changeHandler=event=>{
    this.setState(
      {
        len:event.target.value.length,
        val:event.target.value
      }
    )
  }
  render(){
  let charComps=null;
  let displayChars=null;
  if(this.state.val!=null){
    charComps=[...this.state.val];
    displayChars=(
      <div>
        {charComps.map((l,index)=><Char toprint={l} key={index}/>)}
      </div>
    )
  }
  return (
    <div>
      <InputComp changed={this.changeHandler}/>
      <p>{this.state.len}</p>
      <ValidationComponent len={this.state.len}/>
      {displayChars}
    </div>
  );
}
}

export default App;
