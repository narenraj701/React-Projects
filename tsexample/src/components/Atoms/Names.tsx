import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    Author : {
        display:'inline',
        width: '79px',
        height: '22px',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.57,
        letterSpacing:'normal',
        color: '#3e3f42',
        marginBottom:6
      }
});


const Names:React.FC<{name:string}>=({name})=>{
    const classes=useStyles();
    return <div className={classes.Author}>{name}</div>;
}


export default Names;