import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Title from '../Atoms/Title';
import LightText from '../Atoms/LightText';
import Names from '../Atoms/Names';
import Pages from '../Atoms/Pages';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: 0,
    width: 255,
    height: 138,
    borderRadius: 4,
    border: 'solid 1px #dfe3eb'
  },
  content: {
    display: 'inline-block',
    paddingLeft: 10,
    paddingRight: 0,
  },
  image: {
    height: 105,
    width: 80
  }
});

const BookCard: React.FC<BookCardProps> = ({ title, author, image, categoryname }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.image}><img src={image} alt="icon" /></div>
      </CardContent>
      <CardContent className={classes.content}>
        <Title title={title} />
        <LightText sideHeading="by" />  : <Names name={author} /><br />
        <LightText sideHeading="Category" />      :<Names name={categoryname} /><br />
        <Pages pages="15 pages / 239 pages" />
      </CardContent>
    </Card>
  );
}
export default BookCard;