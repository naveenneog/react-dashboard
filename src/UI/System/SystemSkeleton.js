import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  card: {
    width: 200,
    height:350,
    margin: 20,
    justifyContent: 'center',
  },
  cardButton : {
    display : 'flex',
    padding : 5,
    textAlign : 'center'
  },
  media: {
    textAlign : "center",
    marginLeft:30,
    height: 150,
    maxWidth: 150,
    padding: '10%', // 16:9
    margin:'auto',
  },
  
}));

export default function SystemViewCard(props) {
  console.log("System.js",props);
  const classes = useStyles();
  
  
  return (<Card className={classes.card}>
    <CardHeader
      avatar={
       
          <Skeleton variant="circle" width={40} height={40} />
        
      }
      action={
         null 
      }
      title={ <Skeleton height={10} width="80%" style={{ marginBottom: 6 }} /> }
      subheader={ <Skeleton height={10} width="40%" /> }
    />
    
      <Skeleton variant="rect" className={classes.media} />
   

    <CardContent>
     
        <React.Fragment>
          <Skeleton height={10} style={{ marginBottom: 6 }} />
          <Skeleton height={10} width="80%" />
        </React.Fragment>
      
    </CardContent>
  </Card>);
}

