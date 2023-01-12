import { Card, Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-github-contribution-calendar';
import CustomAppBar from '../common/CustomAppBar';

var values = {
  '2016-06-23': 1,
  '2016-06-26': 2,
  '2016-06-27': 3,
  '2016-06-28': 4,
  '2016-06-29': 4
}
var until = '2016-06-30';
export default function CustomCalendar(){
    return(
      <Grid container direction="column">
        <Grid item>
          <CustomAppBar title="Productivity Chart"/>
        </Grid>
        <Grid item>
          <Card>
          <Calendar values={values} until={until}/>
          </Card>
        </Grid>
      </Grid>
    )
}