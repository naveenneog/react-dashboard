import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ProcIcon from '@material-ui/icons/MemoryTwoTone';
import MemIcon from '@material-ui/icons/SdCard';

const procData = [14.9 , 15 , 5.1 ,20 , 20 ,'yes'];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ProcessorCard() {
  const classes = useStyles();
  const procIcon = <ProcIcon/>
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <ProcIcon />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Processor
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Available:&nbsp; {procData[0]}
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Available(with stealable):&nbsp; {procData[1]}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Assigned to Partitions:&nbsp; {procData[2]}
                </Typography>
                              <Typography variant="body2" gutterBottom>

                                  Configurable: &nbsp; {procData[3]}
                </Typography>
                              <Typography variant="body2" gutterBottom>

                                  Installed:&nbsp; {procData[4]}
                </Typography>
                              <Typography variant="body2" gutterBottom>
                                  Multiple Shared Processor Pools Support:&nbsp; {procData[0]}
                  
                </Typography>
                          </Grid>
              
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Details</Typography>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}