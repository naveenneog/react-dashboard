import React, { Component } from 'react';
import Popout from 'react-popout';
import Button from '@material-ui/core/Button';
import Iframe from 'react-iframe';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import NewWindow from 'react-new-window';
class QuickCreateLegacy extends Component {
    
    state = {
        isPoppedOut: true,
         open: false,
    }


    popout() {
        this.setState({ isPoppedOut: true });
    }

    popoutClosed() {
        this.setState({ isPoppedOut: false });
    }

    handleClickOpen = () =>{
        this.setState({open : true});
    }
    handleClose = () =>{
        this.setState({open : false});
    }
    handleOk = () => {
      
        this.handleClose();
      }
   
      render() {
        let window = this.state.open ?  <NewWindow url = {this.props.url} /> : null;

        return (

            <div>
               
           

            <Link variant="outlined" color="primary" onClick={this.handleClickOpen}>
                {this.props.name}
            </Link>
            {window}
           
                   
                
               
            </div>
           
        )
    }

}

export default QuickCreateLegacy;