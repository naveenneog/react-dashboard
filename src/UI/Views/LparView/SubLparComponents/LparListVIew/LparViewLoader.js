
import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LparSkeleton from '../LparCard/LparSkeleton';
import { Grid } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  
  paper : {
      display : 'flex',
      flexDirection : 'row',
      
  },
  
}));

export default function SystemsLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
     
          <main className={classes.paper}>
            <Grid container spacing={3}>
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              <LparSkeleton />
              </Grid>
          </main>
    </div>
  );
}