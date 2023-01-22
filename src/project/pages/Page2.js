import { AppBar, Button, Grid, Input, TextField, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import OrderMap from '../components/OrderMap'

function Page2() {
  const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
      fetch("https://dc7dcc1d-56f6-477e-8ed5-2e4171628047.mock.pstmn.io/users")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            setFilteredData(json.map(x => x)); // Shallow clone
        });
    },[]);

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography justifyContent="true" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Track Shipment
          </Typography>

        </Toolbar>
      </AppBar>
      </Grid>
      <Grid item>
        <Grid container direction="row">
          <Grid item sx={{justifyContent:"center"}}>
            <Typography sx={{m:1}}>Enter OrderID</Typography>
          </Grid>
          <Grid item>
          <TextField sx={{m:1}}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
    <OrderMap data={filteredData}/>

      </Grid>


    </Grid>
  )
}

export default Page2