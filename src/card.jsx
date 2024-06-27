import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box component="span"
    sx={{ display: 'flex',justifyContent:'center',alignItems:'center',textAlign:'center',  }}
  >
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275,height:375,display:'flex' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          this is very comfortable shoes
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          new brand
        </Typography>
        <Typography variant="body2">
            login
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">contact</Button>
      </CardActions>
    </Card>
  );
}