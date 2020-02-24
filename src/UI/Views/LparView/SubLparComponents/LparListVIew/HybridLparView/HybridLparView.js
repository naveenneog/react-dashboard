import React, { Component } from 'react';
import classes from './StickyHeader.css';
import { StylesContext } from '@material-ui/styles';
import Switch from '@material-ui/core/Switch';
import QuickCreateDialogue from '../CreatePartition/QuickCreateDialogue';
import ToggleTabularButton from '../CreatePartition/ToggleTabularButton';
// This is a duplicate class which is present to avoid compilation issues done for the StickyHeader
class StickyHeader extends Component {

    state = {
        checked : false,
     }
   
     handleChange = () => {
       this.setState({checked : !this.state.checked});
       console.log(this.state.checked);
     };
   
    
    render() {
        
        return (
           

                <div class={classes.sticky}>
                    
                <ToggleTabularButton heading ="Partitions View"/>
                </div>
                
           
        )
    }

}

export default StickyHeader;