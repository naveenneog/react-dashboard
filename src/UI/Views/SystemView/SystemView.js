
import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';




const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  
  paper : {
      display : 'flex',
      flexDirection : 'row',
      
  },
  
}));

export default function MiniDrawer(props) {
  const classes = useStyles();

  
  let systems = (<h2>No systems to display !</h2>);
  
  

  return (
    <div className={classes.root}>
      <CssBaseline />
     
      <main className={classes.paper}>
        {systems}
      </main>
    </div>
  );
}