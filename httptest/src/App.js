import React from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import AddPost from './AddPost';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(
          result=>{
            this.setState({items:result.data.slice(0,3),isLoaded:true});
            console.log(this.state.items);
          })
          .catch(error=>this.setState({error:true}))
  };
  delete=(post)=>{
    axios.delete("https://jsonplaceholder.typicode.com/posts/"+post.id)
    .then(response=>{
      console.log(response);
    const updatedItems=this.state.items.map(item=>{
      if(item.id!==post.id)
        return item;
      return null;  
    })
    const newItems = updatedItems.filter(item => item)
    this.setState({items:newItems});
  })
}

  render () {
    let posts=<h1 style={{textAlign:'center'}}>Something Went wrong.........</h1>;
    if(!this.state.error){
      posts=this.state.items.map(post=><PostCard id={post.id} 
        key={post.id} 
        title={post.title} 
        body={post.body} 
        deleteHandler={()=>this.delete(post)} />);
    }
   return(
    <div>
      {!this.state.isLoaded && !this.state.error && <h1 style={{textAlign:'center'}}>Loading........</h1>}
      {posts}
      <AddPost />
    </div>
  );
  }
}
export default App;
