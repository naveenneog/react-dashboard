import React, { Component } from 'react';
import {Switch ,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Dashboard from './UI/Dashboard/Dashboard';
import ViewSystems from './UI/Root/VIewSystems';
import SystemView from  './UI/Views/SystemView/SystemView2';
// import Layout from './hoc/LayoutWithDrawer';
import LparView from './UI/Views/LparView/LparView';
import LparListTabularView from './UI/Views/LparView/SubLparComponents/LparListVIew/LparListTabularView';
import Layout from './hoc/Layout';
import axios from './AxiosHMC';
import URL from './URL';
import ViewSystemsLoader from './UI/Root/ViewSystemsLoader';
import { SnackbarProvider} from 'notistack';
import HybridLparListView from './UI/Views/LparView/SubLparComponents/LparListVIew/HybridLparView/HybridLparView';
class App extends Component {
  state = {
    loading : true,
    error : false,
    system : [],
    systemMock : [{
    "ProcessorThrottling": "false",
    "BMCVersion": null,
    "Description": null,
    "ConfigurableSystemMemory": 65536,
    "SystemFirmware": "VL940_FW940.00 (23)",
    "SystemType": "fsp",
    "PermanentSystemProcessors": 20,
    "DeferredLevel": null,
    "ConfigurableSystemProcessorUnits": 2E+1,
    "CurrentAvailableSystemProcessorUnits": 0.85,
    "SystemName": "fsp-tiamat",
    "ManufacturingDefaultConfigurationEnabled": "false",
    "UUID": "2b35c593-13e1-3769-8ee0-84cc1eed3cfb",
    "InstalledSystemProcessorUnits": 2E+1,
    "PermanentSystemMemory": 65536,
    "IsPowerVMManagementMaster": "false",
    "ActivatedLevel": "23",
    "InstalledSystemMemory": 65536,
    "CapacityOnDemandProcessorCapable": "true",
    "MTMS": "9009-42A*ZZ00107",
    "MaximumPartitions": 400,
    "CurrentAvailableSystemMemory": 1024,
    "SystemLocation": null,
    "PhysicalSystemAttentionLEDState": "true",
    "DeferredServicePackNameAndLevel": null,
    "PNORVersion": null,
    "ActivatedServicePackNameAndLevel": "FW940.00 (23)",
    "ServiceProcessorVersion": "00090000",
    "State": "operating",
    "MergedReferenceCode": " ",
    "IsNotPowerVMManagementMaster": "false",
    "IsClassicHMCManagement": "true",
    "ReferenceCode": " ",
    "CapacityOnDemandMemoryCapable": "true",
    "IPAddress": "9.3.115.17",
    "MemoryDefragmentationState": "Not_In_Progress"
}, {
    "ProcessorThrottling": "false",
    "BMCVersion": null,
    "Description": null,
    "ConfigurableSystemMemory": 393216,
    "SystemFirmware": "SV860_FW860.70 (205)",
    "SystemType": "fsp",
    "PermanentSystemProcessors": 24,
    "DeferredLevel": null,
    "ConfigurableSystemProcessorUnits": 24,
    "CurrentAvailableSystemProcessorUnits": 3.95,
    "SystemName": "yeti",
    "ManufacturingDefaultConfigurationEnabled": "false",
    "UUID": "3725acd7-2824-3e51-a759-20a68035078b",
    "InstalledSystemProcessorUnits": 24,
    "PermanentSystemMemory": 393216,
    "IsPowerVMManagementMaster": "false",
    "ActivatedLevel": "205",
    "InstalledSystemMemory": 393216,
    "CapacityOnDemandProcessorCapable": "true",
    "MTMS": "8408-E8E*10A73EV",
    "MaximumPartitions": 480,
    "CurrentAvailableSystemMemory": 226048,
    "SystemLocation": null,
    "PhysicalSystemAttentionLEDState": "true",
    "DeferredServicePackNameAndLevel": null,
    "PNORVersion": null,
    "ActivatedServicePackNameAndLevel": "FW860.70 (205)",
    "ServiceProcessorVersion": "0008000C",
    "State": "operating",
    "MergedReferenceCode": " ",
    "IsNotPowerVMManagementMaster": "false",
    "IsClassicHMCManagement": "true",
    "ReferenceCode": " ",
    "CapacityOnDemandMemoryCapable": "true",
    "IPAddress": "9.3.128.76",
    "MemoryDefragmentationState": "Not_In_Progress"
}, {
    "ProcessorThrottling": "false",
    "BMCVersion": null,
    "Description": null,
    "ConfigurableSystemMemory": 1.2288E+5,
    "SystemFirmware": "VL940_FW940.01 (34)",
    "SystemType": "fsp",
    "PermanentSystemProcessors": 20,
    "DeferredLevel": null,
    "ConfigurableSystemProcessorUnits": 2E+1,
    "CurrentAvailableSystemProcessorUnits": 14.9,
    "SystemName": "fsp-sansw3_p9zz",
    "ManufacturingDefaultConfigurationEnabled": "false",
    "UUID": "5ffe5ff8-499b-3e94-9a08-e402099ac32f",
    "InstalledSystemProcessorUnits": 2E+1,
    "PermanentSystemMemory": 155648,
    "IsPowerVMManagementMaster": "false",
    "ActivatedLevel": "34",
    "InstalledSystemMemory": 1.2288E+5,
    "CapacityOnDemandProcessorCapable": "true",
    "MTMS": "8375-42A*10C62FW",
    "MaximumPartitions": 400,
    "CurrentAvailableSystemMemory": 96512,
    "SystemLocation": null,
    "PhysicalSystemAttentionLEDState": "true",
    "DeferredServicePackNameAndLevel": null,
    "PNORVersion": null,
    "ActivatedServicePackNameAndLevel": "FW940.01 (34)",
    "ServiceProcessorVersion": "00090000",
    "State": "operating",
    "MergedReferenceCode": " ",
    "IsNotPowerVMManagementMaster": "false",
    "IsClassicHMCManagement": "true",
    "ReferenceCode": " ",
    "CapacityOnDemandMemoryCapable": "true",
    "IPAddress": "9.3.232.116",
    "MemoryDefragmentationState": "Not_In_Progress"
}]

  }
  componentDidMount(){
    //Uncomment for the real data
    axios.get(URL.ManagedSystemQuickJSON)
      .then(response => {
            this.setState({loading : false , system : response.data})
      }).catch(error =>  this.setState({loading : false , error : true}));
  }
   
  render() {
    const dashboard =  <ViewSystems systems = {this.state.system} loading = {this.state.loading} /> 
    // const dashboard = <ViewSystemsLoader />;
    return (
      <div className="App">
        <SnackbarProvider maxSnack={5}>
       <Layout > 
       <Switch >
            <Route path = "/" exact render = {() => dashboard} />
            <Route path = "/partitions" exact component = {LparView} />
            <Route path = "/system/:id" exact component = {(props) => <SystemView {...props} systems={this.system} />} />
            <Route path = "/partitionsTabular" exact component = {LparListTabularView} />
            <Route path = "/hybridLparView" exact component = {HybridLparListView} />
          </Switch>
       </Layout>
       </SnackbarProvider>
      </div>
    );
  }
}

export default App;
