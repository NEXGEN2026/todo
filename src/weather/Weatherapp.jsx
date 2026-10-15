import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";

import "./Weather.css"

function Weatherapp(){
   
   const [data,setdata]=useState({});
   const [location,setlocation]=useState("");
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2103afe1f12c603b47da6e0dcc62c807`;

   const searchlocation=(event)=>{
      if(event.key===`Enter`) {
         axios.get(url).then((response)=>{
            setdata(response.data)
            console.log(response.data)
         })
      }
   }

   return(
   <div className="APP">
     <div className="search">
       <input type="text"
        className="Inputbar"
        placeholder="Enter location" 
        value={location} 
        onKeyPress={searchlocation}
        onChange={event=>setlocation(event.target.value)} />
     </div>
     <div className="contaner">

       <div className="TOP">
         <div className="location">
            <p>{data.name}</p>
         </div>

         <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}*F</h1>:null}
         </div>

         <div className="description">
            {data.weather ? <h1>{data.weather[0].main}</h1>:null}
         </div>
       </div>

       {data.name!=undefined &&
       <div className="BUTTOM">

         <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}%</p>:null}
            <p >feels like</p>
         </div>
         
         <div className="humidity">
         {data.main ? <p className="bold">{data.main.humidity.toFixed()}%</p>:null}
          <p>humidity</p>
         </div>

         <div className="wind">
           <p>windy</p>
           {data.wind ? <p className="bold">{data.wind.speed}MPH</p>:null}
           <p>wind speed</p>
         </div>

       </div>}
     </div>
   </div>);

};

export default Weatherapp