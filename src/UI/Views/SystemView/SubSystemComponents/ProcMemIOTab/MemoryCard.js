import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
// import ProcIcon from '@material-ui/icons/Memory';
import MemIcon from '@material-ui/icons/SdCardRounded';

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

export default function MemoryCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <MemIcon />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
             
              <Grid item xs>
              <Typography variant="body1" gutterBottom>
                Memory
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Available: 0.94 GB (960.0 MB)
                </Typography>
                <Typography variant="body2" gutterBottom>
                              Available(with stealable):
                          13.19 GB (13504.0 MB)
                          </Typography>
                <Typography variant="body2" gutterBottom>
                                Assigned to Partitions:
                                51.19 GB (52416 MB)
                </Typography>
                              <Typography variant="body2" gutterBottom>
                                Assigned Persistent Memory:
                                0 GB (0 MB)
                </Typography>
                              <Typography variant="body2" gutterBottom>
                                Reserved:
                                11.62 GB (11904.0 MB)
                </Typography>
                              <Typography variant="body2" gutterBottom>
                                Configurable:
                                64 GB (65536.0 MB)
                </Typography>
                              <Typography variant="body2" gutterBottom>
                                Installed:
                                64 GB (65536.0 MB)
                </Typography>
                              <Typography variant="body2" gutterBottom>
                                Memory Region Size:
                                0.06 GB (64.0 MB)
                </Typography>

                              <Typography variant="body2" gutterBottom>
                                Active Memory Sharing Support:
                                Yes
                </Typography>

                
              </Grid>
              <Grid item>
                {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Shutdown
                </Typography> */}
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}