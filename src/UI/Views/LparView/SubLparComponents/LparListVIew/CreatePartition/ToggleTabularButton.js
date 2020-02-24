import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AppsIcon from '@material-ui/icons/Apps';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';
import TocIcon from '@material-ui/icons/Toc';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import PinDropSharpIcon from '@material-ui/icons/PinDropSharp';
import Paper from '@material-ui/core/Paper';
import QuickCreateDialogue from './QuickCreateDialogue';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    paper: {
      display: 'flex',
      border: `1px solid ${theme.palette.divider}`,
      justifyContent: 'flex-end',
      zIndex: '200',
      
    },
    divider: {
      alignSelf: 'stretch',
      height: 'auto',
      margin: theme.spacing(1, 0.5),
    },
  }));
  
  const StyledToggleButtonGroup = withStyles(theme => ({
    grouped: {
      margin: theme.spacing(0.5),
      border: 'none',
      padding: theme.spacing(0, 1),
      '&:not(:first-child)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-child': {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }))(ToggleButtonGroup);
  
  export default function ToggleTabularButton(props) {
    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);
  
    const handleFormat = (event, newFormats) => {
      setFormats(newFormats);
    };
  
    const handleAlignment = (event, newAlignment) => {
      if (newAlignment !== null) {
      setAlignment(newAlignment);
      }
      console.log(newAlignment);
    };
  
    const classes = useStyles();
  
    return (
      <div>
        <Paper elevation={0} className={classes.paper} >
        <div style ={{padding: '15px',marginRight:'57%'}} >
            <b>{props.heading}</b>
            </div>
        <div style ={{padding: '8px 10px'}} >
        <QuickCreateDialogue />
        </div>

          <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="grid" aria-label="left aligned">
            <Link to ={'/partitions'}>
              <AppsIcon />
              </Link>
            </ToggleButton>
            <ToggleButton value="tabular" aria-label="centered">
            <Link to ={'/partitionsTabular'}>
              <ViewListIcon />
              </Link>
            </ToggleButton>
            
            
          </StyledToggleButtonGroup>
          
          <Divider orientation="vertical" className={classes.divider} />
          <StyledToggleButtonGroup  
            size="small"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment" >

             <ToggleButton value="center" aria-label="centered">
              <ViewQuiltIcon />
            </ToggleButton>
            </StyledToggleButtonGroup>
            <Divider orientation="vertical" className={classes.divider} />
            <StyledToggleButtonGroup  
            size="small"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment" >

             <ToggleButton value="pin" aria-label="centered">
             <PinDropSharpIcon />
            </ToggleButton>
            <ToggleButton value="drop" aria-label="centered" disabled>
             <ArrowDropDownIcon />
            </ToggleButton>
            </StyledToggleButtonGroup>
        
      
        </Paper>
      </div>
    );
  }