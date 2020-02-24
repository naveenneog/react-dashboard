import React from 'react'
//
import useChartConfig from '../PCMView/hooks/useChartConfig'
import Box from '../PCMView/components/Box'
import Paper from '@material-ui/core/Paper';

import { Chart } from 'react-charts'
import { width } from '@material-ui/system';
let sourceCode
export default () => {
  const { data, randomizeData } = useChartConfig({
    series: 6
  })
  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  return (
    <div>
        <Paper style = {{ padding: '10px',
    margin: 10,
    maxWidth: 510,}} >
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
     
      <Box>
        <Chart
          data={data}
          series={series}
          axes={axes}
          tooltip
          primaryCursor
          secondaryCursor
        />
      </Box>
      </Paper>
      </div>
  )
}