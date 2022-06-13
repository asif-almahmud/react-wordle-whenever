import React from "react";

const Keyboard = () => {
   const line1_keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
   const line2_keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
   const line3_keys = ["Z", "X", "C", "V", "B", "N", "M"];
   return (
      <div className="keyboard">
         <div className="line1">
            {line1_keys.map((key) => (
               <div key={key}>{key}</div>
            ))}
         </div>
         <div className="line2">
            {line2_keys.map((key) => (
               <div key={key}>{key}</div>
            ))}
         </div>
         <div className="line3">
            {line3_keys.map((key) => (
               <div key={key}>{key}</div>
            ))}
         </div>
      </div>
   );
};

export default Keyboard;
