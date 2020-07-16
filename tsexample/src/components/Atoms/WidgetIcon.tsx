import React from 'react';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    reading_24px : {
        display:'inline-block',
        width: '33px',
        height: '40px',
        marginLeft:22,
        marginTop:9
      }
});

const WidgetIcon:React.FC<{icon:string;}>=({icon})=>{
    const classes=useStyles();
    return <div className={classes.reading_24px}><img src={icon} alt="Icon" /></div>;
}


export default WidgetIcon;