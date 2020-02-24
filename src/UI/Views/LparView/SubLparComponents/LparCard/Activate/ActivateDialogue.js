import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSnackbar } from 'notistack';
import ActivateStepper from './ActivateStepper';

export default function ActivateDialogue(props) {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
//   setOpen(props.open);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    let message1 = <p>Activating Partition {props.lpar.PartitionName}</p>;
    let message2 = <p>Partition Activation Success {props.lpar.PartitionName}</p>;
    enqueueSnackbar(message1 , { variant: "info" ,anchorOrigin : {vertical: 'bottom', horizontal: 'right',} });

    enqueueSnackbar(message2 , { variant: "success" ,anchorOrigin : {vertical: 'bottom', horizontal: 'right',} });
    setOpen(false);
    props.close()
  }

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth='md'
       open={props.open} 
       onClose={props.close} 
       aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Activate  {props.lpar.PartitionName}</DialogTitle>
        <DialogContent>
         
          <ActivateStepper 
          lparDetails = {props.lpar} 
          finish = {handleOk.bind()}/>
          
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            Ok
          </Button> */}
        </DialogActions>
     </Dialog>
    </div>
  );
}