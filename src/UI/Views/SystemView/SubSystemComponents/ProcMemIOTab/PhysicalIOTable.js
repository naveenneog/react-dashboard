import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, details, physicalLocCode,owner,partitionType,busNo,iOPoolID, sriovCapable ) {
  return { name, details, physicalLocCode,owner,partitionType,busNo,iOPoolID, sriovCapable  };
}

const rows = [
  createData('PCIe3 4-Port 16Gb FC Adapter', 'i', 'U78D2.001.RCH0032-P1-C49','sansw3a','AIX/Linux','Firebird 1',65535,'Yes'),
  createData('1 Gigabit Ethernet (UTP) 4 Port Adapter PCIE-4x/Short', 'i', 'U78D2.001.RCH0032-P1-C50','sansw3a','AIX/Linux','Firebird 1',65535,'Yes'),
  createData('PCIe3 4-Port 16Gb FC Adapter', 'i', 'U78D2.001.RCH0032-P1-C49-T1','sansw3a','AIX/Linux','Firebird 1',65535,'Yes'),
  createData('PCIe3 2-Port 16Gb FC Adapter', 'i', 'U78D2.001.RCH0032-P1-C49-T2','sansw3a','AIX/Linux','Firebird 1',65535,'Yes'),
  createData('PCIe3 4-Port 8Gb Ethernet Adapter', 'i', 'U78D2.001.RCH0032-P1-C48','sansw3a','AIX/Linux','Firebird 1',65535,'Yes'),
  createData('PCIe3 SAS Adapter', 'i', 'U78D2.001.RCH0032-P1-C47','sansw3a','AIX/Linux','Firebird 1',65535,'Yes'),
  createData('PCIe3 4-Port 32Gb FC Adapter', 'i', 'U78D2.001.RCH0032-P1-C46','sansw3a','AIX/Linux','Firebird 1',65535,'Yes'),
  createData('PCIe3 4-Port 16Gb FC Adapter', 'i', 'U78D2.001.RCH0032-P1-C45','sansw3a','AIX/Linux','Firebird 1',65535,'Yes'),

];

export default function generalSettings() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
         <TableHead>
          <TableRow>
            <TableCell><b>Physical IO </b></TableCell>
            <TableCell align="middle"><b>details</b></TableCell>
            <TableCell align="right"><b>Physical Location Code</b></TableCell>
            <TableCell align="right"><b>Owner</b></TableCell>
            <TableCell align="right"><b>Partition type</b></TableCell>
            <TableCell align="right"><b>Bus number</b></TableCell>
            <TableCell align="right"><b>I/O Pool Id</b></TableCell>
            <TableCell align="right"><b>SRIOV Capable</b></TableCell>
          </TableRow>
        </TableHead> 
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
             
              <TableCell align="middle">{row.details}</TableCell>
                <TableCell align="right">{row.physicalLocCode}</TableCell>
              <TableCell align="right">{row.owner}</TableCell>
              <TableCell align="right">{row.partitionType}</TableCell>
            <TableCell align="right">{row.busNo}</TableCell>
            <TableCell align="right">{row.iOPoolID}</TableCell>
            <TableCell align="right">{row.sriovCapable}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}