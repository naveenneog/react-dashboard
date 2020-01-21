import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import StandbyIcon from '@material-ui/icons/WarningOutlined';
const powerIcon = ()=> (
    <Tooltip title="Standby">
        <StandbyIcon />
    </Tooltip>
)

export default powerIcon;