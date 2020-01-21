import React from "react";
import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import Card from '../LparCard/LparCard';
import MaterialTable from 'material-table';
import axios from '../../../../../AxiosHMC';
import URL from '../../../../../URL';
// import ViewSystemsLoader from '../../../../Root/ViewSystemsLoader';
import LparViewLoader from './LparViewLoader';
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
    loaded : true,
    columns: [
        { title: 'Name', field: 'PartitionName' },
        { title: 'Partition State', field: 'PartitionState' },
        { title: 'Parition Id', field: 'PartitionID', type: 'numeric' },
        { title: 'IP Address', field: 'surname' },
        { title: 'Attention LED', field: 'IsVirtualServiceAttentionLEDOn' },
        { title: 'Reference Code', field: 'ReferenceCode' },
        { title: 'OS Type', field: 'PartitionType' },
      ],
    partitions : [{
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
  }

  
  componentDidMount() {
    console.log('Mounting on Update',this.state.partitions);
    // if(this.state.partitions.length <= 0){
    //   console.log('Making a Logical Partition Call');
    //   axios.get('uom/LogicalPartition/quick/All?group=None')
    //   .then(response => {
    //       this.setState({partitions : response.data, loaded : true})
    //   }).catch( error =>{
    //       this.setState({error : true , loaded : false});
    //   })
    // }
   
  }
    render(){
      const { classes } = this.props;
      console.log(this.props);
      let lpars = <LparViewLoader />;
      console.log(this.state.partitions);
      
      
      if (this.state.partitions && this.state.loaded) {
        
        console.log(this.state.partitions);
        lpars = 
                <Grid item>
                    <MaterialTable
                        title="Partitions View"
                        columns={this.state.columns}
                        data={this.state.partitions}
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

                          {lpars}
                        
            </div>
        )
    }
}

export default LparListTabularView;


