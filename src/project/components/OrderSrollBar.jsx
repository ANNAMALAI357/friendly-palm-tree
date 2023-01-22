import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import OrderDetails from './OrderDetails';
import { Grid } from '@mui/material';
import CustomAppBar from '../common/CustomAppBar';
function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function OrderScrollBar() {
  return (
    <Box
      sx={{ width: '100%', height: 300, maxWidth: 900, bgcolor: 'background.paper' }}
    >
        <Grid container direction="column">
            <Grid item>
                <CustomAppBar title="Orders & Details"/>
            </Grid>
            <Grid item>
            <Grid container direction="row">
            <Grid item xs={4}>
            <FixedSizeList
        height={250}
        width={100}
        itemSize={46}
        itemCount={5}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
            </Grid>
            <Grid item xs={8} sx={{mt:1,ml:-8}}>
                <OrderDetails/>
            </Grid>
        </Grid>
            </Grid>
        </Grid>
        
    </Box>
  );
}