import { ArrowCircleDownRounded } from '@mui/icons-material'
import { Box, Stack, Typography } from '@pankod/refine-mui'
import ReactApexChart from 'react-apexcharts'

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config'


function TotalRevenue() {
  return (
    <Box p={4} flex={1} bgcolor="#fcfcfc" id="chart" display="flex" flexDirection="column" borderRadius="15px">
        <Typography fontSize={18} fontWeight={600} color="#11142d">
          Total Revenue
        </Typography>

        <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
          <Typography fontSize={28} fontWeight={700} color="#11142d">$234,567</Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <ArrowCircleDownRounded sx={{fontSize: 25, color: '#475be8'}} />
            <Stack>
              <Typography fontSize={15} color="#475be8">0.8%</Typography>
              <Typography fontSize={12} color="#808191">Then Last Month</Typography>
            </Stack>
          </Stack>
        </Stack>

        <ReactApexChart series={TotalRevenueSeries} type="bar" height={310} options={TotalRevenueOptions} />
    </Box>
  )
}

export default TotalRevenue