import  React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    by:{
        display:'inline-block',
        minWidth: 30,
        height: 22,
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.57',
        letterSpacing: 'normal',
        color: '#9ea0a5',
        marginBottom:6
      }
});


const LightText:React.FC<{sideHeading:string}>=({sideHeading})=>{
    const classes=useStyles();
    return <div className={classes.by}>{sideHeading}</div>;
}


export default LightText;