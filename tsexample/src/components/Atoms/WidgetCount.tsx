import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    Count: {
        width: '80px',
        height: '50px',
        fontFamily: 'Roboto',
        fontSize: '36px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.25px',
        color: '#3e3f42',
        marginLeft:70,
        marginBottom:13
      }
});


const WidgetCount:React.FC<{count:number}>=({count})=>{
    const classes=useStyles();
    return <div className={classes.Count}>{count}</div>;
}


export default WidgetCount;