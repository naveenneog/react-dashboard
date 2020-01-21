import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DNSIcon from '@material-ui/icons/Dns';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssesmentIcon from '@material-ui/icons/Assessment';
import {Link} from 'react-router-dom';
export const mainListItems = (
  <div>
    <Link to ={'/'}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Systems" />
    </ListItem>
    </Link>
    <Link to ={'/partitions/'}>
    <ListItem button>
      <ListItemIcon>
        <DNSIcon />
      </ListItemIcon>
      <ListItemText primary="Partition" />
    </ListItem>
    </Link>
    <Link to={'/pcm'} >
    <ListItem button>
      <ListItemIcon>
        <AssesmentIcon />
      </ListItemIcon>
      <ListItemText primary="PCM" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>System Settings</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="LDAP" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);