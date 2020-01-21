import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red ,lightGreen } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import systemIcon from '../../../src/resources/images/system.png';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InfoIcon from '@material-ui/icons/Info';
import PieIcon from '@material-ui/icons/PieChartRounded';
import ProcIcon from '@material-ui/icons/Memory';
import MemIcon from '@material-ui/icons/SdCard';
import Chip from '@material-ui/core/Chip';
import PowerIcon from '../Icons/PowerIcon';
import StandbyIcon from '../Icons/StandbyIcon';
import AttentionIcon from '@material-ui/icons/WarningRounded';
import Skeleton from '@material-ui/lab/Skeleton';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 200,
    maxHeight : '100%',
    margin: 20,
    justifyContent: 'center',
  },
  cardButton : {
    display : 'flex',
    padding : 5,
    textAlign : 'center'
  },
  media: {
    textAlign : "center",
    marginLeft:30,
    height: 150,
    maxWidth: 150,
    padding: '10%', // 16:9
    margin:'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  operating: {
    backgroundColor: lightGreen[500],
  },
  standby: {
    backgroundColor: red[500],
  },
  
  imageWidth: {
      maxWidth: 30,
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

export default function SystemViewCard(props) {
  // console.log("System.js",props);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [shadow , setShadow] = React.useState(1);
  
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
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickProc = () =>{
    console.log('Handle Proc Click')
  }
  const handleClickMem = () =>{
    console.log('Handle mem Click')
  }
  let attentionChip = null;
  if(props.system.PhysicalSystemAttentionLEDState){
    attentionChip =  <Chip
    icon={<AttentionIcon />}
    label= "Attention LED"
    style={{backgroundColor:'yellow'}}
    variant="outlined"
   />
  }
  
  return (

    <Card onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    elevation={shadow}
    className={classes.card}>
      <CardHeader
         avatar={
            props.loading ? (
              <Skeleton variant="circle" width={40} height={40} />
            ):(
            <Avatar aria-label="recipe" className={props.system.State ? classes.operating : classes.standby}>
              {props.system.State ? <PowerIcon /> : <StandbyIcon />}
            </Avatar>
            )
          }
        action={props.loading ? null : (
            <div>
          <IconButton onClick = {handleClick} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
           <Menu
           id="simple-menu"
           anchorEl={anchorEl}
           keepMounted
           open={Boolean(anchorEl)}
           onClose={handleClose}
           >
           <MenuItem onClick={handleClose}>View Partitions</MenuItem>
           <MenuItem onClick={handleClose}>View Performance Data Collection</MenuItem>
           <MenuItem onClick={handleClose}>Reset or Remove</MenuItem>
         </Menu>
         </div> 
        )
        }
        title= {props.loading ? <Skeleton height={10} width="80%" style={{ marginBottom: 6 }} /> : props.system.SystemName}
      />
    {props.loading ? (
        <Skeleton variant="rect" className={classes.media} />
      ): (
      <ButtonBase className={classes.cardButton}>
      <Link to ={'/system/' + props.system.id} key={props.system.id}>
        <img className={classes.media} src = {systemIcon} />
        </Link>
      </ButtonBase>
      ) }
     
          <CardContent>
          { props.loading ? (
           <React.Fragment>
           <Skeleton height={10} style={{ marginBottom: 6 }} />
           <Skeleton height={10} width="80%" />
             </React.Fragment>
            ) : (
              <div>
              <div className = {classes.chips}>
              <Chip
                  icon={<ProcIcon />}
                // TODO:  Replace the bar with the available and used proc and memory
                  label={props.system.CurrentAvailableSystemProcessorUnits+ "/" +props.system.ConfigurableSystemProcessorUnits}
                  onClick={handleClickProc}
              />
           {attentionChip}

              <Chip
                  icon={<MemIcon />}
                  label={props.system.CurrentAvailableSystemMemory/1024 + "/" +props.system.InstalledSystemMemory/1024}
                  onClick={handleClickMem}
              />
             
            </div>
             
            </div>
            )}
          </CardContent> 
          {props.loading ? null : (
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <InfoIcon />
        </IconButton>
        <IconButton aria-label="share">
          <PieIcon />
        </IconButton>
       
          </CardActions> )}
      
    </Card>
  );
}