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
class App extends Component {
  state = {
    loading : true,
    error : false,
    system : [],
    // system : [{
    //   name : 'Firebird 1',
    //   id : '9009-110',
    //   proc: 32,
    //   mem : 256,
    //   power: true,
    //   led : false
    // },{
    //   name : "brazos-123",
    //   id: '9119-902',
    //   proc : 64,
    //   mem  : 1045,
    //   power: false,
    //   led :true
    // },
    // {
    //   name : "TuletaAustin",
    //   id    : "9009-101A",
    //   proc : 16,
    //   mem : 120,
    //   power:true,
    //   led: true
    // }]
    
  }
  componentDidMount(){
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
       <Layout > 
       <Switch >
            <Route path = "/" exact render = {() => dashboard} />
            <Route path = "/partitions" exact component = {LparView} />
            <Route path = "/system/:id" exact component = {SystemView} />
            <Route path = "/partitionsTabular" exact component = {LparListTabularView} />
          </Switch>
       </Layout>
      </div>
    );
  }
}

export default App;
