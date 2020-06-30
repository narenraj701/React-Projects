import React from 'react';
import axios from 'axios';
import ToDoCard from './Molecule/ToDoCard';
import AddToDo from './Organisms/AddToDo';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';


class App extends React.Component {
  state = { items: null };
  componentDidMount() {
    console.log(this.props);
    axios.get("/api/messages")
      .then(response => {
        this.setState({ items: response.data })
        //console.log(this.state.items)
      }).catch(error=>console.log(error));
  }
  handleCompleted(id) {
    let putval=null;
    let newItems = this.state.items.map(item => {
      if (item.id === id) {
        item.completed = true;
        putval=item;
      }
      return item;
    })
    //console.log(newItems);
    axios.put("/api/messages",putval).then(res=>console.log(res))
    .catch(error=>console.log(error));
    this.setState({ items: newItems });
  }
  deleteHandler(id) {
    const url = `/api/messages/${id}`;
    axios
      .delete(url)
      .then(res => {
        let UpdatedItems=this.state.items.map(item=>{
          if(item.id===id)
          return null;
          else{
            return item;
          }
        })
    let newItems = UpdatedItems.filter(item => item)
    this.setState({items:newItems});
      })
      .catch(err => {
        console.log(err);
      });
  }
  head=styled.header`
  display:block;
  text-align:center;
  background-color:black;
  height:40px;
  font-size:20px;
  `
  render() {
    let loadedMessages = <h1 style={{ textAlign: 'center' }}>Loading.........</h1>;
    if (this.state.items !== null) {
      loadedMessages = this.state.items.map(
        item => <ToDoCard
          key={item.id}
          message={item.message}
          due={item.date}
          completed={item.completed}
          disableit={() => this.handleCompleted(item.id)}
          delete={() => this.deleteHandler(item.id)} />
      );
      }
    
    return (
      <div>
        <this.head>
              abc
              <Link to="/" style={{color:'white'}}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/addPost" style={{color:'white'}}>Add-A-ToDo</Link>
        </this.head>
        <Route path="/" exact render={()=>loadedMessages}/>
        <Route path="/addPost"  exact component={AddToDo} />
      </div>
    )
  }
}

export default App;
