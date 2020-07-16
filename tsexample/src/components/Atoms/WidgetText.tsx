import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    CurrentlyReading: {
        marginLeft:13,
        marginTop:9,
        display:'inline',
        width: '156px',
        height: '22px',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle : 'normal',
        lineHeight : '1.57',
        letterSpacing: 'normal',
        color: '#6b6c6f'
    },
});


const WidgetText:React.FC<{status:string}>=({status})=>{
    const classes=useStyles();
    return <div className={classes.CurrentlyReading}>{status}</div>;
}


export default WidgetText;