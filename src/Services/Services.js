import React,{useState} from 'react';
import './services.css';
import Shaving from '../assets/shaving.jpeg';
import RateCards from '../Cards/RateCards';
import StylingImg from '../assets/styling.jpeg';
import Womenhair from '../assets/womenhair.jpeg';
import Makeup from '../assets/makeup.jpeg';

const Services = () => {

    return (
    <>    
           <h1 className="title"> OUR SERVICES </h1>
        <div className="service">
           <RateCards 
           heading={"MENS HAIR CUT"}
           image={StylingImg}
           />
           <RateCards 
           heading={"MENS SHAVING"}
           image={Shaving}
           />
           <br/>
        </div>
           <div className="service2">
        <RateCards 
           heading={"WOMENS HAIR STYLING"}
           image={Womenhair}
           />  
        <RateCards 
           heading={"MAKEUP & BRIDAL"}
           image={Makeup}
           />  
           </div>
    </>    
    )
}

export default Services
