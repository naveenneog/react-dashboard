import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import StandbyIcon from '@material-ui/icons/WarningOutlined';
const powerIcon = ()=> (
    <Tooltip title="Not Activated">
        <StandbyIcon />
    </Tooltip>
)

export default powerIcon;