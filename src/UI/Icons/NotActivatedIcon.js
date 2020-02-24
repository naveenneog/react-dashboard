import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import StandbyIcon from '@material-ui/icons/WarningOutlined';
import PowerIcon from '@material-ui/icons/PowerSettingsNewOutlined';
const powerIcon = ()=> (
    <Tooltip title="Not Activated">
        <PowerIcon />
    </Tooltip>
)

export default powerIcon;