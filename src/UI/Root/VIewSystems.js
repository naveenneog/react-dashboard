
import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import System from '../../UI/System/System';




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
  if(props.systems){
    // systems = <System system = {props.systems[0]} id ={props.systems[0].id}/>
    console.log(props.systems);
      systems = props.systems.map(system => {
       return(
           <System system = {system} key ={system.id}/> )
      });
     
  }
  console.log(systems);
  

  return (
    <div className={classes.root}>
      <CssBaseline />
     
      <main className={classes.paper}>
        {systems}
      </main>
    </div>
  );
}