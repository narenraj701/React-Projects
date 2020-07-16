import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    InorganicChemistryCopy5 :{
        minWidth: '152px',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: '#3e3f42',
        marginBottom:6
      }
});


const Title:React.FC<{title:string}>=({title})=>{
    const classes=useStyles();
    return <div className={classes.InorganicChemistryCopy5}>{title}</div>;
}


export default Title;