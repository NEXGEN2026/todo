import { useState,useEffect} from "react";
import "./Digitalclock/clock.css";

function Digitalclock(){
    const [time,settime]=useState(new Date());
 
    useEffect(()=>{

         const intervalid= setInterval(()=>{

           settime(new Date())}
           ,1000);

            return(()=>{
                clearInterval(intervalid);});

        },[]);

        function formatetime(){
            let hour=time.getHours();
            let min=time.getMinutes();
            let sec=time.getSeconds();
            let ampm= hour>=12? `AM`:`PM`;

            hour=hour%12||12;
            return `${padzero(hour)}:${padzero(min)}:${padzero(sec)} ${padzero(ampm)}` ;
        };

        function padzero(number){
            return (number < 10 ? "0" : "")+number
        }

   return(<>
          <div className="clock-cant">
             <div className="clock">
                <span>{formatetime()}</span>
             </div>
         </div>
     </>);
};

export default Digitalclock