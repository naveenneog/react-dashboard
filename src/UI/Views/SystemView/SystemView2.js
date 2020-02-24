import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SystemCard from './SubSystemComponents/SystemCard';
import GeneralSettings from './SubSystemComponents/GeneralSettings';
import ProcMemIOTab from './SubSystemComponents/ProcMemIOTab/ProcMemIOTab';
import ProcessorCard from '../SystemView/SubSystemComponents/ProcMemIOTab/ProcessorCard';
import MemoryCard from '../SystemView/SubSystemComponents/ProcMemIOTab/MemoryCard';
import PCMView from './PCMView/PCMView';
import Grid from '@material-ui/core/Grid';
import SystemTabSheet from './SubSystemComponents/SystemTabSheet/SystemTabSheet';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  card :{
    textAlign : 'left',
    width: '100%',
    margin: 20,
  }
}));

export default function SystemViewExpansionPanel(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div> 
      <Grid container spacing={2}>
      <Grid item  xs={6}>
            <SystemCard />
          </Grid>
          <Grid item xs={6}>
             <ProcessorCard />
          </Grid>
          <Grid item xs={6}>
             <MemoryCard />
          </Grid>
          <Grid item xs={6}>
             <PCMView />
          </Grid>
          <Grid item>
             {/* <PCMView /> */}
          </Grid>
      </Grid>
          

     
    
    <div className={classes.root}> 
    <SystemTabSheet />
      {/* Use Expansion Panel here */}

      </div>

    </div>
  );
}