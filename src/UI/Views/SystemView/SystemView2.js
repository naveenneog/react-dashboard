import React, { Component } from 'react';
import SystemCard from './SubSystemComponents/SystemCard';
import ProcessorCard from '../SystemView/SubSystemComponents/ProcMemIOTab/ProcessorCard';
import MemoryCard from '../SystemView/SubSystemComponents/ProcMemIOTab/MemoryCard';
import PCMView from './PCMView/PCMView';
import LegacyCard from './SubSystemComponents/LegacyComponents/LegacyComponentsCard';
import Grid from '@material-ui/core/Grid';
import SystemTabSheet from './SubSystemComponents/SystemTabSheet/SystemTabSheet';
import Paper from '@material-ui/core/Paper';

class SystemViewExpansionPanel extends Component {
  state ={
    isPoppedOut : false,
  }
  popout() {
    this.setState({isPoppedOut: true});
  }
 
  popoutClosed() {
    this.setState({isPoppedOut: false});
  }
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SystemCard />
          </Grid>
          <Grid item xs={4}>
            
           <LegacyCard />
         
          </Grid>
          <Grid item xs={4}>
            <ProcessorCard />
          </Grid>
          <Grid item xs={4}>
            <MemoryCard />
          </Grid>
          <Grid item xs={6}>
            <PCMView />
          </Grid>
          <Grid item xs={6}>
            <PCMView />
          </Grid>
          
        </Grid>




        <div className={{
          width: '100%',
          padding: 10
        }}>
          <SystemTabSheet />
          {/* Use Expansion Panel here */}

        </div>

      </div>
    );

  }

}
export default SystemViewExpansionPanel;

