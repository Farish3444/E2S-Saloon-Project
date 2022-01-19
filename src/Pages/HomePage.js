import React from 'react';
import './homepage.css';
import Cutting from '../assets/cutting.jpeg';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';

const HomePage = () => {
    return (
    <div className="home">
        <div className=" left">
           <img src={Cutting} alt="" className="cutting" />
        </div>
<div className="right">
        <NavBar />
    <div className="weknow">
    <h1 style={{color:'#FEF0A3'}}> WE KNOW HOW TO </h1>
    <h1 style={{color:'#7AAF32'}}> RE-CREATE YOUR STYLE </h1>   
    </div>
        <a href="tel:9898989898">
         <button className="bookbutton">BOOK AN APPOINMENT</button>
       </a>
</div>
<div style={{position:'absolute'}}>
<Services /> 
</div>
    </div>

    )
}

export default HomePage

// <div className="home">
//       <img src={logo} alt="" className="logo" />
//       <div className=" left">
//         <img src={Cutting} alt="" className="cutting" />
//       </div>
//       <div className=" right">
//         <NavBar />
//         <div className="weknow">
//           <h1 href="https://fonts.googleapis.com/css?family=Dosis">
//             <span style={{ color: "#FEF0A3" }}>WE KNOW</span>
//             <br />
//             YOUR STYLE
//           </h1>
//           <p className="slogan">
//             Visit and Make yourself more Attractive with our Best Stylist.
//           </p>
//           <a href="tel:9898989898">
//             <button className="bookbutton">BOOK AN APPOINMENT</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };