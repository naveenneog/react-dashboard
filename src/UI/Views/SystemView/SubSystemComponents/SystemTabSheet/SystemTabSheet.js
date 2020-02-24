import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GeneralSettings from '../GeneralSettings';
import PhysicalIOTable from '../ProcMemIOTab/PhysicalIOTable';
import ProcMemIOTab from '../ProcMemIOTab/ProcMemIOTab';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SystemTabSheet() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Physical IO" {...a11yProps(0)} />
          <Tab label="Virtual IO servers" {...a11yProps(1)} />
          <Tab label="Virtual Networks" {...a11yProps(2)} />
          <Tab label="Virtual NICs" {...a11yProps(3)} />
          <Tab label="Virtual Storage" {...a11yProps(4)} />
          <Tab label="Hardware Virtualized IO" {...a11yProps(5)} />
          <Tab label="Shared Processor Pool" {...a11yProps(6)} />
          <Tab label="Shared Memory Pool" {...a11yProps(7)} />
          <Tab label="CoD Functions" {...a11yProps(8)} />
          <Tab label="Licensed Capabilities" {...a11yProps(9)} />
          <Tab label="Task Logs" {...a11yProps(10)} />
          <Tab label="Serviceability" {...a11yProps(11)} />
          <Tab label="VN Diagrams" {...a11yProps(12)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <PhysicalIOTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <GeneralSettings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProcMemIOTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={11}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={12}>
        Item Seven
      </TabPanel>
    </div>
  );
}