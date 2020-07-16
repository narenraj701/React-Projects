 import React from 'react';
import Reading from './Assets/Reading.png';
import ToRead from './Assets/ToRead.png'
import Read from './Assets/Read.png';
import Target from './Assets/Target.png'
import Widget from './components/Molecules/Widget';
import { Grid } from '@material-ui/core';
import BookCard from './components/Molecules/BookCard';
import size from './Assets/size.png';
import size1 from './Assets/size1.png';
const BookCardData:AllBookCardProps={
  bookcards:[
    {author:"Joe Pearson",categoryname:"Chemistry",image:size,title:"Inorganic Chemistry"},
    {author:"Joe Pearson",categoryname:"Physics",image:size1,title:"Physics II"},
    {author:"Joe Pearson",categoryname:"Chemistry",image:size,title:"Inorganic Chemistry"},
    {author:"Joe Pearson",categoryname:"Physics",image:size1,title:"Physics II"}
  ]
}
const WidgetData: AllWidgetProps = {
  widgets: [
    { icon: Reading, count: 10, status: "CURRENTLY READING" },
    { icon: ToRead, count: 20, status: "BOOKS TO READ" },
    { icon: Read, count: 5, status: "BOOKS READ" },
    { icon: Target, count: 100, status: "TARGET PER YEAR" }
  ],
    
}
function App() {
  return (
    <div>
      <Grid container  justify='center' spacing={4} >
        {WidgetData.widgets.map(item =>
            <Grid item key={item.status}>
              <Widget 
              icon={item.icon} 
              count={item.count} 
              status={item.status} />
            </Grid>)}
      </Grid>
      <Grid container justify='center' spacing={4}> 
          {BookCardData.bookcards.map((item,index)=>
            <Grid item key={index}>
              <BookCard 
              image={item.image} 
              author={item.author} 
              title={item.title} 
              categoryname={item.categoryname}  />
            </Grid>)}
      </Grid>
    </div>
  );
}

export default App;
