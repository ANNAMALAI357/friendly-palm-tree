import React from 'react';
import ProjectLineChart from '../components/ProjectLineChart'
import Card from '@mui/material/Card';
import {Grid, Paper} from '@mui/material';
import Corousal from '../components/Corousal';
import CustomCalender from '../components/CustomCalender'
import OrderScrollBar from '../components/OrderSrollBar';
function Page1() {
  return (
    <>
          <Paper
        sx={{
          minHeight: "100%",
          background: "rgba(225,225,225,0.1)",
          boxShadow: "3px 3px rgba(0, 0, 0, 0.2)",
        }}>
    <div>Page1</div>
    <Grid container direction="row" spacing={3}>
      <Grid item >
      <Card>
    <ProjectLineChart/> 
    </Card>
      </Grid>
      <Grid item>
        <Corousal/>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={3}>
          <CustomCalender/>
        </Grid>
        <Grid item xs={9}>
          <OrderScrollBar/>
        </Grid>
      </Grid>
      </Paper>
    </>
  )
}

export default Page1