import React, { useEffect,useState } from 'react';
import axios from 'axios';
import ToDoCard from './Molecule/ToDoCard';
import AddToDo from './Organisms/AddToDo';
import {Route} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  linkstyle:{
    color:'white',
    margin:'10px',
    opacity:'0.9',
    '&:hover':{
      opacity:'1.0',
      fontSize:'30px'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appstyle:{
    alignItems:'center'
  }
}));

const App=()=> {
  const classes=useStyles();
  const [state,setState] = useState({ items: null ,error:false});
  useEffect(()=>{
      axios.get("/api/messages")
      .then(response => {
        setState({ items: response.data,error:false })
        //console.log(state.items)
      }).catch(error=>{
        setState({items:null,error:true})
        console.log(error)
      });
  },[]);
  const handleCompleted=(id) =>{
    let putval=null;
    let newItems = state.items.map(item => {
      if (item.id === id) {
        item.completed = true;
        putval=item;
      }
      return item;
    })
    //console.log(newItems);
    axios.put("/api/messages",putval).then(res=>{
      console.log(res)
      setState({items:newItems,error:false})
    }
      )
    .catch(error=>{
      setState({items:newItems,error:true})
      console.log(error)
    });
  }
  const deleteHandler=(id)=> {
    const url = `/api/messages/${id}`;
    axios
      .delete(url)
      .then(res => {
        let UpdatedItems=state.items.map(item=>{
          if(item.id===id)
          return null;
          else{
            return item;
          }
        })
    let newItems = UpdatedItems.filter(item => item)
    setState({items:newItems,error:false});
      })
      .catch(err => {
        console.log(err);
      });
  }

    let loadedMessages = <h1 style={{ textAlign: 'center' }}>Loading.........</h1>;
    if(state.error){loadedMessages = <h1 style={{ textAlign: 'center' }}>Something Went Wrong</h1>;}
    if (state.items !== null) {
      loadedMessages = state.items.map(
        item => <ToDoCard
          key={item.id}
          message={item.message}
          due={item.date}
          completed={item.completed}
          disableit={() => handleCompleted(item.id)}
          delete={() => deleteHandler(item.id)} />
      )};
    return (<div className={classes.root}>
        <AppBar position="static" className={classes.appstyle}>
          <Toolbar >
            <Link href="/" variant='string' >
            <Typography variant='h6' color='inherit' className={classes.linkstyle}>
              ToDoList
            </Typography>
            </Link>
            <Link href="/addPost" variant='string'>
            <Typography variant='h6' color='inherit' className={classes.linkstyle}>
              AddToDo
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>      
        <Route path="/" exact render={()=>loadedMessages}/>
        <Route path="/addPost"  exact component={AddToDo} />
      </div>
    )
  }

export default App;
