import React,{useState} from 'react'
import {makeStyles} from '@mui/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Shaving from '../assets/shaving.jpeg';



// CSS PART
const useStyle = makeStyles({
    CardContainer : {
        display:'block',
        width:"50vw",
        backgroundColor:"black",
        height:'25vw'
    },
    heading:{
        color:'black',
        
    }
})

const RateCards = ({heading,image}) => {
    const classes = useStyle();
    const theme = createTheme();

    return (
        <React.Fragment>
            <Card sx={{display:'block',width:"40vw",backgroundColor:'smokewhite',height:"25vw"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', pl: 0, pb: 1 }}>     
      <CardMedia
        component="img"
        sx={{ width: 250,height:330 }}
        image={image}
        alt="Image-Saloon"
      />
        <Typography component="div" variant="h3" className={classes.heading}>
            {heading}
        </Typography>
        </Box>
      </Box>
    </Card>
        </React.Fragment>
    )
}

{/* <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>     */}

export default RateCards
