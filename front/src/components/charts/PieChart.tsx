import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { PieChartProps } from "interfaces/home";
import { Box, Stack, Typography } from '@pankod/refine-mui'

function PieChart({title, value, series, colors}: PieChartProps) {
  return (
    <Box
      id="chart"
      bgcolor="#fcfcfc"
      display="flex"
      flexDirection="row"
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">{title}</Typography>
        <Typography fontSize={24} fontWeight={700} mt={1} color="#11142d">{value}</Typography>
      </Stack>

      <ReactApexChart 
        options={{
          chart: {type: 'donut'},
          colors,
          legend: {show: false},
          dataLabels: {enabled: false}
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  )
}

export default PieChart