import React, { Component } from 'react';
import {
    FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel,
    MenuItem, Select, Grid, ExpansionPanel, ExpansionPanelSummary,
    Typography, ExpansionPanelDetails, Checkbox
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ActivationStepTab extends Component {
    state = {
        value: 'Activate',
        profile: 'current_configuration',
        keylock: 'DNOC',
        bootmode: 'DNOC',
        expanded: false,
        vterm: false,
        vsi: false,
    }

    setActivateValue = (event) => {
        this.setState({ value: event.target.value })
    }
    handleProfileChange = (event) => {
        this.setState({ profile: event.target.value });
    }
    handleExpand = () => {
        this.setState({ expanded: !this.state.expanded });
    }
    handleKeylockChange = (event) => {
        this.setState({ keylock: event.target.value });
    }
    handleBootmodeChange = (event) => {
        this.setState({ bootmode: event.target.value });
    }
    handleVtermChange = (event) => {
        this.setState({ vterm: event.target.checked });
    }
    handleVsiChange = (event) => {
        this.setState({ vsi: event.target.checked });
    }
    render() {
        return (
            <div>
                <h1>Choose Activation Options</h1>
                <p>Use this to activate or network boot an AIX or Linux logical partition.
                    You can also specify the advanced settings to activate a logical partition.</p>
                <FormControl component="fieldset" style={{ width: '600px' }}>

                    <RadioGroup aria-label="position" name="position" value={this.state.value} onChange={this.setActivateValue} row>
                        <FormLabel component="required" style={{ padding: '15px' }}>Operation type </FormLabel>
                        <FormControlLabel
                            value="Activate"
                            control={<Radio color="primary" />}
                            label="Activate"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="Netboot"
                            control={<Radio color="primary" />}
                            label="Netboot"
                            labelPlacement="start"
                        />

                    </RadioGroup>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>

                            <FormLabel component="required" style={{ padding: '15px' }}>Partition Configuration </FormLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.profile}
                                onChange={this.handleProfileChange}
                            >
                                <MenuItem value={'current_configuration'}>Current Configuration</MenuItem>
                                <MenuItem value={'profile1'}>Default Profile</MenuItem>
                                <MenuItem value={'profile2'}>Profile 30</MenuItem>
                            </Select>
                        </Grid>
                        <ExpansionPanel expanded={this.state.expanded} onChange={this.handleExpand}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header">
                                <Typography >Advanced settings</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <FormLabel component="required" style={{ padding: '15px' }}>Keylock Position </FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.keylock}
                                            onChange={this.handleKeylockChange}
                                        >
                                            <MenuItem value={'DNOC'}>Do Not override configuration</MenuItem>
                                            <MenuItem value={'manual'}>manual</MenuItem>
                                            <MenuItem value={'normal'}>normal</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormLabel component="required" style={{ padding: '15px' }}>Boot Mode </FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.bootmode}
                                            onChange={this.handleBootmodeChange}
                                        >
                                            <MenuItem value={'DNOC'}>Do Not override configuration</MenuItem>
                                            <MenuItem value={'normal'}>Normal</MenuItem>
                                            <MenuItem value={'SMS'}>System Management services</MenuItem>
                                            <MenuItem value={'default_boot'}>Diagnostic with Default Boot list</MenuItem>
                                            <MenuItem value={'stored_boot'}>Diagnostic with Stored Boot list</MenuItem>
                                            <MenuItem value={'open_firmware'}>Open Firmware OK prompt</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel

                                            control={
                                                <Checkbox
                                                    checked={this.state.vterm}
                                                    onChange={this.handleVtermChange}
                                                    value="vterm"
                                                    color="primary"
                                                />
                                            }
                                            labelPlacement="start"
                                            label="Open Vterm"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            label="Use VSI Profile"
                                            labelPlacement="start"
                                            control={
                                                <Checkbox
                                                    checked={this.state.vsi}
                                                    onChange={this.handleVsiChange}
                                                    value="vsi"
                                                    color="primary"

                                                />
                                            }

                                        />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                    </Grid>
                </FormControl>

            </div>
        )
    }
}

export default ActivationStepTab;