import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import WidgetIcon from '../Atoms/WidgetIcon';
import WidgetText from '../Atoms/WidgetText';
import WidgetCount from '../Atoms/WidgetCount';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
        root: {
            width: '255px',
            height: '120px',
            borderRadius: '4px',
            border: 'solid 1px #dfe3eb',
        },
        content:{
            display:'inline-block',
            padding:0
        },
        header:{
            padding:0
        },
        IconMargin: {
            position: 'absolute',
            top: '9px',
            left: '22px'
        },
        StatusMargin: {
            position: 'absolute',
            right: '27px',
            top: '18px',
        },
        count: {
            position: 'absolute',
            top: '57px',
            left: '70px',
        }
    });



const Widget:React.FC<WidgetProps>=({icon,status,count})=> {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader  className={classes.header} avatar={<WidgetIcon icon={icon} />} title= {<WidgetText status={status} />} />
            <CardContent className={classes.content}>
                <WidgetCount count={count}/>
            </CardContent>
        </Card>
    );
}


export default Widget;