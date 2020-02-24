import { forwardRef } from 'react';
import Grid from "@material-ui/core/Grid";
import React from 'react';
import axios from '../../../../../AxiosHMC';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import LparViewLoader from './LparViewLoader';
import MaterialTable from 'material-table';
import LinearProgress from '@material-ui/core/LinearProgress';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TableMenu from './TableMenu';
import StickyHeader from "./HybridLparView/HybridLparView";
import NewWindow from 'react-new-window'

import URL from '../../../../../URL';
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: '#f9f9f9',
//         margin: 20,
    
//       },
//       card: {
//         height: 140,
//         width: 100
//       },
      
//   });

  
  
class LparListTabularView extends React.Component{
  state = {
    partitions : [] ,
    loaded : false,
    anchorEl: true,
    columns: [
        { title: 'Name', field: 'PartitionName' },
        { title: 'Partition State', field: 'PartitionState' },
        { title: 'Parition Id', field: 'PartitionID', type: 'numeric' },
        { title: 'IP Address', field: 'ResourceMonitoringIPAddress' },
        { title: 'Attention LED', field: 'IsVirtualServiceAttentionLEDOn' },
        { title: 'Reference Code',
          field: 'ReferenceCode' , 
          render: rowData =>(
          <a href=" ">{rowData.ReferenceCode}</a>
          )},
         
        { title: 'OS Type', field: 'PartitionType' },
      ],
    partitions : [],
    partitionsMock : [{
    "ProgressState": null,
    "Description": null,
    "MemoryMode": "Dedicated",
    "MigrationState": "Not_Migrating",
    "PowerManagementMode": null,
    "OperatingSystemVersion": "Unknown",
    "PartitionID": 768,
    "IsVirtualServiceAttentionLEDOn": "false",
    "AllocatedVirtualProcessors": 1,
    "PartitionState": "not activated",
    "ResourceMonitoringIPAddress": null,
    "HasPhysicalIO": "false",
    "SharingMode": "uncapped",
    "UUID": "4D47F7F2-DC81-4E45-B4D8-1611E844291C",
    "CurrentProcessors": null,
    "LastActivatedProfile": "default_profile",
    "RemoteRestartState": "Invalid",
    "PartitionType": "AIX/Linux",
    "PartitionName": "brazos4aix11678",
    "RMCState": "inactive",
    "CurrentMemory": 3072,
    "HasDedicatedProcessors": "false",
    "AssociatedManagedSystem": "https://9.126.171.97:443/rest/api/uom/ManagedSystem/eb178b02-0ab1-3521-8a84-8ca28187c28c",
    "ReferenceCode": "00000000",
    "CurrentProcessingUnits": 0.06
}, {
    "ProgressState": null,
    "Description": null,
    "MemoryMode": "Dedicated",
    "MigrationState": "Not_Migrating",
    "PowerManagementMode": null,
    "OperatingSystemVersion": "Unknown",
    "PartitionID": 767,
    "IsVirtualServiceAttentionLEDOn": "false",
    "AllocatedVirtualProcessors": 1,
    "PartitionState": "not activated",
    "ResourceMonitoringIPAddress": null,
    "HasPhysicalIO": "false",
    "SharingMode": "uncapped",
    "UUID": "4DB13C69-16C9-4CDA-87D3-90BD03DE1C87",
    "CurrentProcessors": null,
    "LastActivatedProfile": "default_profile",
    "RemoteRestartState": "Invalid",
    "PartitionType": "AIX/Linux",
    "PartitionName": "brazos4aix1167",
    "RMCState": "inactive",
    "CurrentMemory": 3072,
    "HasDedicatedProcessors": "false",
    "AssociatedManagedSystem": "https://9.126.171.97:443/rest/api/uom/ManagedSystem/eb178b02-0ab1-3521-8a84-8ca28187c28c",
    "ReferenceCode": "00000000",
    "CurrentProcessingUnits": 0.06
}, {
    "ProgressState": null,
    "Description": null,
    "MemoryMode": "Dedicated",
    "MigrationState": "Not_Migrating",
    "PowerManagementMode": null,
    "OperatingSystemVersion": "Unknown",
    "PartitionID": 766,
    "IsVirtualServiceAttentionLEDOn": "false",
    "AllocatedVirtualProcessors": null,
    "PartitionState": "not activated",
    "ResourceMonitoringIPAddress": null,
    "HasPhysicalIO": "false",
    "SharingMode": "sre idle proces",
    "UUID": "0BE5A910-508D-460A-9E66-27FF4A029A07",
    "CurrentProcessors": 2,
    "LastActivatedProfile": "default_profile",
    "RemoteRestartState": "Invalid",
    "PartitionType": "OS400",
    "PartitionName": "IBMi1_TIO",
    "RMCState": "none",
    "CurrentMemory": 512,
    "HasDedicatedProcessors": "true",
    "AssociatedManagedSystem": "https://9.126.171.97:443/rest/api/uom/ManagedSystem/eb178b02-0ab1-3521-8a84-8ca28187c28c",
    "ReferenceCode": "00000000",
    "CurrentProcessingUnits": null
}, {
    "ProgressState": null,
    "Description": null,
    "MemoryMode": "Dedicated",
    "MigrationState": "Not_Migrating",
    "PowerManagementMode": null,
    "OperatingSystemVersion": "Unknown",
    "PartitionID": 765,
    "IsVirtualServiceAttentionLEDOn": "false",
    "AllocatedVirtualProcessors": 1,
    "PartitionState": "not activated",
    "ResourceMonitoringIPAddress": null,
    "HasPhysicalIO": "false",
    "SharingMode": "uncapped",
    "UUID": "04162CC9-32B1-4C7F-9D1D-204653ACDE7D",
    "CurrentProcessors": null,
    "LastActivatedProfile": "default_profile",
    "RemoteRestartState": "Invalid",
    "PartitionType": "AIX/Linux",
    "PartitionName": "kk_test",
    "RMCState": "inactive",
    "CurrentMemory": 1024,
    "HasDedicatedProcessors": "false",
    "AssociatedManagedSystem": "https://9.126.171.97:443/rest/api/uom/ManagedSystem/eb178b02-0ab1-3521-8a84-8ca28187c28c",
    "ReferenceCode": "00000000",
    "CurrentProcessingUnits": 0.1
}],
    error: false,
    multi: 0,
  }

  

  componentDidMount() {
    console.log('Mounting on Update',this.state.partitions);
    if(this.state.partitions.length <= 0){
      console.log('Making a Logical Partition Call');
      axios.get('uom/LogicalPartition/quick/All?group=None')
      .then(response => {
          this.setState({partitions : response.data, loaded : true})
      }).catch( error =>{
          this.setState({error : true , loaded : false});
      })
    }

   
  } 
  setAnchorEl = (event) =>{
      console.log(event.currentTarget);
    this.setState({anchorEl : event.currentTarget});
    }
    handleClick = event => {
    this.setAnchorEl(event.currentTarget);
  };

   handleClose = () => {
    this.setAnchorEl(null);
    
  };
  async fetchUsers(query){
    let datas = await fetch("https://9.126.171.97/rest/api/uom/LogicalPartition/quick/All?group=None");
    console.log(datas);
    return {  data: datas, page: query.page, totalCount: datas.length}
   }
    render(){
      const { classes } = this.props;
    //   console.log(this.props);
      let lpars = <LparViewLoader />;
      let progress = this.state.loaded ? null : <LinearProgress style ={{ width: '100%',
      '& > * + *': {
        marginTop: 10 }}}/>;
    //   console.log(this.state.partitions);
      
      
      if (this.state.partitions && this.state.loaded) {
        
        // console.log(this.state.partitions);
        lpars = 
                <Grid item>
                     <TableMenu multi = {this.state.multi}/>
                     <br/>
                    <MaterialTable
                        title="Partitions Table View"
                        columns={this.state.columns}
                        data={this.state.partitions} // ENable it for mock data
                        icons={tableIcons}
                       
                        options={{
                            selection: true,
                            pageSizeOptions :[5,10,20,50,100,500],
                          }}
                          onSelectionChange={(rows) => {this.setState({multi : rows})}}
                        // data={this.fetchUsers}
                          
                    />

                </Grid>
            
        
        
      }
  // else if(!this.state.loaded && this.state.error ) {
  //   lpars = (<h2>Error while fetching data !</h2>);
  // }else if(!this.state.loaded && this.state.error){
  //   lpars = <ViewSystemsLoader />
  

  // }
        
        return (
            <div>
              <StickyHeader />
            <Grid container style = {{margin:20}} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="left" spacing={2}>
                          {/* <TableMenu multi = {this.state.multi}/> */}
                          {lpars}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LparListTabularView;
