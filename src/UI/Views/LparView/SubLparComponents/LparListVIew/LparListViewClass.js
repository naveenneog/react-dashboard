import React from "react";
import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import Card from '../LparCard/LparCard';
import axios from '../../../../../AxiosHMC';
import URL from '../../../../../URL';
// import ViewSystemsLoader from '../../../../Root/ViewSystemsLoader';
import LparViewLoader from './LparViewLoader';
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f9f9f9',
        margin: 20,
    
      },
      card: {
        height: 140,
        width: 100
      },
      
  });

  
  
class LparListViewClass extends React.Component{
  state = {
    partitions : [] ,
    loaded : false,
    // partitions : [{
    //   name : 'AixLinux 1',
    //   id : '1',
    //   proc: 3,
    //   mem : 2,
    //   activate: true,
    //   type: true,
    // },{
    //     name : 'AixLinux 2',
    //     id : '2',
    //     proc: 3.5,
    //     mem : 4,
    //     activate: false,
    //     type: true,
    // },
    // {
    //     name : 'IBMi1',
    //     id : '3',
    //     proc: 2,
    //     mem : 0.5,
    //     activate: true,
    //     type: false,
    // }]
    error: false,
  }

  // componentDidUpdate() {
  //   console.log('Mounting on Update',this.state.partitions);
  //   if(this.state.partitions.length <= 0){
  //     console.log('Making a Logical Partition Call');
  //     axios.get('uom/LogicalPartition/quick/All?group=None')
  //     .then(response => {
  //         this.setState({partitions : response.data, loaded : true})
  //     }).catch( error =>{
  //         this.setState({error : true , loaded : false});
  //     })
  //   }
   
  // }
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
    render(){
      const { classes } = this.props;
      console.log(this.props);
      let lpars = <LparViewLoader />;
      console.log(this.state.partitions);
      
      
      if (this.state.partitions && this.state.loaded) {
        
        console.log(this.state.partitions);
        lpars = this.state.partitions.map(lpar => {
          return (
            <Grid item>
              <Card className={classes.card} lpar={lpar} key={lpar.PartitionID} />
            </Grid>
          )
        }
        );
      }
  // else if(!this.state.loaded && this.state.error ) {
  //   lpars = (<h2>Error while fetching data !</h2>);
  // }else if(!this.state.loaded && this.state.error){
  //   lpars = <ViewSystemsLoader />
  

  // }
        
        return (
            <div>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="left" spacing={2}>
                            {/* {[0, 1, 2].map(value => ( */}
                          {lpars}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(LparListViewClass);
