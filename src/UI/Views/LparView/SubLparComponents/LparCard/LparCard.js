import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import ibmiICon from '../LparCard/virtualmachine_IBMi_64.png';
import aixIcon from '../LparCard/virtualmachine_LINUX_AIX_64.png';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import PowerIcon from '../../../../Icons/AcitvateIcon';
import NotActivatedIcon from '../../../../Icons/NotActivatedIcon';
import { red ,lightGreen } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProcIcon from '@material-ui/icons/Memory';
import MemIcon from '@material-ui/icons/SdCard';
import Chip from '@material-ui/core/Chip';
import AttentionIcon from '@material-ui/icons/WarningRounded';
import InfoIcon from '@material-ui/icons/Info';
import CardActions from '@material-ui/core/CardActions';
import PieIcon from '@material-ui/icons/PieChartRounded';
import Popover from '@material-ui/core/Popover';
import { getThemeProps } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import ActivateDialogue from '../LparCard/Activate/ActivateDialogue';

const useStyles = makeStyles(theme => ({

    card: {
        // height: 140,
        width: 140
    },
    header:{
        paddingLeft: 10 ,
        padding: 5,
    },
    operating: {
        width : 22,
        height : 22,
        backgroundColor: lightGreen[500],
    },
    standby: {
        width : 22,
        height : 22,
        // backgroundColor: red[500],
    },
    image : {
      width: 100,
      // height: 100,
    },
    partitionName:{
      textAlign: 'center',
    },
    chips: {

      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    
    }

}));
export default function LparCard(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [shadow , setShadow] = React.useState(1);
    const [anchorPop, setAnchorPop] = React.useState(null);
    const [openActivate , setOpenActivate] = React.useState(false);

  const handlePopOverClick = event => {
    setAnchorPop(event.currentTarget);
  };

  const handlePopOverClose = () => {
    setAnchorPop(null);
  };

  const open = Boolean(anchorPop);
  const id = open ? 'simple-popover' : undefined;

    const onMouseOver = () => {
      setShadow(4);
    }

    const onMouseOut = () => {
      setShadow(1);
    }
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
        setShadow(1);
      };
      // console.log('LPAR Props',props);
      let attentionChip = null;
  if(props.lpar.led){
    attentionChip =  <Chip
    icon={<AttentionIcon />}
    label= "Attention LED"
    style={{backgroundColor:'yellow'}}
    variant="outlined"
   />
  }
  const handlePopupClose = () =>{
    setOpenActivate(false);
    handleClose();
  }
  const handleClickProc = () =>{
    console.log('Handle Proc Click')
    console.log(props.lpar.HasDedicatedProcessors ) ;
    console.log(!props.lpar.HasDedicatedProcessors ? props.lpar.CurrentProcessors : props.lpar.CurrentProcessingUnits);
  }
  const handleClickMem = () =>{
    console.log('Handle mem Click')
  }
  const handleActivate = () => {
    setOpenActivate(true);
  }
    return (
        <Card onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        elevation={shadow}
        className={classes.card}  >
        <CardHeader className={classes.header}
          avatar={

            <Avatar aria-label="recipe" className={(props.lpar.PartitionState === 'running')  ? classes.operating : classes.standby}>
              {(props.lpar.PartitionState === 'running') ? <PowerIcon /> : <NotActivatedIcon />}
            </Avatar>
          }
          action={
            <div>
              <IconButton onClick={handleClick} aria-label="settings">
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleActivate}>Activate</MenuItem>
                
                  <ActivateDialogue lpar = {props.lpar} open = {openActivate} close = {handlePopupClose.bind()}/>
                 
                <MenuItem onClick={handleClose}>View Performance Data Collection</MenuItem>
                <MenuItem onClick={handleClose}>Delete Partition</MenuItem>
              </Menu>
            </div>
          }
          // title={props.lpar.name}
        />
            
       <CardContent>
           <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={(props.lpar.PartitionType === 'AIX/Linux') ? aixIcon : ibmiICon} />
            </ButtonBase>
            <Typography className={classes.partitionName} color="textPrimary" gutterBottom>
            {props.lpar.PartitionName}
           </Typography>
           <div className = {classes.chips}>
           <Chip
                  icon={<ProcIcon />}
                // TODO:  Replace the bar with the available and used proc and memory
                  
                  label={!props.lpar.HasDedicatedProcessors ? props.lpar.CurrentProcessors : props.lpar.CurrentProcessingUnits}
                  onClick={handleClickProc}
              />
           {attentionChip}

              <Chip
                  icon={<MemIcon />}
                  label={props.lpar.CurrentMemory }
                  onClick={handleClickMem}
              />
             </div>
         
         </CardContent>
         <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick ={handlePopOverClick}>
              <InfoIcon />
            </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorPop}
            onClose={handlePopOverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Card >
              <CardContent>
              
                <Typography variant="body2" component="p">
                System Name: <b>fsp-tiamat </b><br />
                Reference Code: {props.lpar.ReferenceCode}<br />
                Partition ID: {props.lpar.PartitionID}<br />
                IP Address: {props.lpar.ResourceMonitoringIPAddress}<br />
                Environment: {props.lpar.PartitionType}<br />
                OS Version: {props.lpar.OperatingSystemVersion}<br />
                RMC Connection: {props.lpar.RMCState}<br />
                Last Activated Profile: {props.lpar.LastActivatedProfile}<br />
                Group tags:<br />

                </Typography>
              </CardContent>
              </Card>
          </Popover>
            <IconButton aria-label="share">
              <PieIcon />
            </IconButton>

          </CardActions>
        </Card>

    );
}