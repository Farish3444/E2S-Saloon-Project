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
        width:"40vw",
        backgroundColor:"green",
        height:'25vw',
    },
    heading:{
        color:'black',
    },
    "@media (min-width:300px) and (max-width:500px) ":{
              CardContainer:{
                  width:"150vw",
                  height:"90vw"
              }  
    }
})

const RateCards = ({heading,image}) => {
    const classes = useStyle();
    const theme = createTheme();

    return (
        <React.Fragment>
            {/* <Card sx={{display:'block',width:"40vw",backgroundColor:'blue',height:"25vw"}}> */}
            <Card className={`${classes.CardContainer}`}>
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


export default RateCards
