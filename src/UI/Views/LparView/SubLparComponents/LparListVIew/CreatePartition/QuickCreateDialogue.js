import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PartitionDetailsAccordion from './PartitionDetailsAccordion';
import { useSnackbar } from 'notistack';

export default function QuickCreateDialogue() {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    enqueueSnackbar("Create New Partition ", { variant: "success" ,anchorOrigin : {vertical: 'bottom', horizontal: 'right',} });
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Partition
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Partition Legacy</DialogTitle>
        <DialogContent>
          <DialogContentText>
          You can use the switch to create one or more partitions with minimum or configured resources. 
          Multiple Partition creation support Add or Remove partitions as per the need using -/+ icon.
           These partitions will show up in partitions view. Please add storage and network before activating the partition.
          </DialogContentText>
          
          <PartitionDetailsAccordion />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}