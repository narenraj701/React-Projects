import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    pages : {
        width: '116px',
        height: '18px',
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterHpacing: 'normal',
        color: '#6b6c6f',
        marginBottom:6
      }
});


const Pages:React.FC<{pages:string}>=({pages})=>{
    const classes=useStyles();
    return <div className={classes.pages}>{pages}</div>;
}


export default Pages;