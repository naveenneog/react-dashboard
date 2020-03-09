import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';
import LegacyLink from './QuickCreateLegacy';
import QuickCreateLegacy from './QuickCreateLegacy';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 10,
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function LegacyComponentsCard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>

                            <Grid item xs>
                            <Typography variant="body2" gutterBottom>
                                    Legacy URI list ...
                                   
                                 </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <Link></Link>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <LegacyLink name="Quick Create Legacy"
                                        url="https://9.3.147.222:443/ui/#/ManagedSystem/3725acd7-2824-3e51-a759-20a68035078b%7c8408-E8E*10A73EV/createQuickPartition"
                                    />
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                <LegacyLink name="Add Vios"
                                        url="https://9.3.147.222:443/ui/#/ManagedSystem/3725acd7-2824-3e51-a759-20a68035078b%7c8408-E8E*10A73EV/AddVios"
                                    />
                                </Typography>
                                <Typography>
                                <LegacyLink name="Dojo Logical Partitions"
                                        url="https://9.3.147.222:443/dashboard#resources/systems/3725acd7-2824-3e51-a759-20a68035078b/logical-partitions"
                                    />
                                </Typography>
                                <Typography>
                                <LegacyLink name="AUIML Panels"
                                        url=" https://9.3.147.222/hmc/remotectl/bonsai?operation=launchtask&amp;targets=8408-E8E*10A73EV&amp;taskid=com.ibm.hmc.ui.sys.refcodes"
                                    />
                                </Typography>
                               
                                
                                {/* 
                                <Typography variant="body2" gutterBottom>
                                    Assigned Persistent Memory:
                                    0 GB (0 MB)
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Reserved:
                                    11.62 GB (11904.0 MB)
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Configurable:
                                    64 GB (65536.0 MB)
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Installed:
                                    64 GB (65536.0 MB)
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Memory Region Size:
                                    0.06 GB (64.0 MB)
                </Typography>

                                <Typography variant="body2" gutterBottom>
                                    Active Memory Sharing Support:
                                    Yes
                </Typography> */}


                            </Grid>
                            <Grid item>
                                {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Shutdown
                </Typography> */}
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}