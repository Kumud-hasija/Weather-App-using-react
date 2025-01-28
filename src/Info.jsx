import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import './Search.css'
import IMG from './assets/img.webp';
import HOT_URl from './assets/hot.jpg';
import COLD_URl from './assets/cold.webp';
import RAIN_URl from './assets/rain.jpg';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Info({info}){

    // let info = {
    //     city :"delhi",
    //     feelsLike : 24.08,
    //     temp :25.05,
    //     tempMin : 25.05,
    //     tempMax : 25.05,
    //     humidity:47,
    //     weather:"haze"
    // };

    return(
        <div className="InfoBox" >
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80 ? 
          RAIN_URl :  
          info.temp >15 ? 
          HOT_URl : 
          COLD_URl 
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { info.humidity>80 ? 
          <ThunderstormIcon/> :  
          info.temp >15 ? 
          <WhatshotIcon/> : 
          <AcUnitIcon/>
          } 
          {info.city.toUpperCase()} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <h4>Temperature = {info.temp}&deg;C</h4>
        <h4>Temperature minimum = {info.tempMin}&deg;C</h4>
        <h4>Temperature maximum = {info.tempMax}&deg;C</h4>
        <h4>Humidity = {info.humidity}</h4>
        <h4>The weather can be described as <b>{info.weather}</b>  and feels like {info.feelsLike}&deg;C</h4>
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    );

}