import React from "react";
import Key from "./Key";

const Keyboard = () => {
   const line1_keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
   const line2_keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
   const line3_keys = ["Z", "X", "C", "V", "B", "N", "M"];
   return (
      <div className="keyboard">
         <div className="line1">
            {line1_keys.map((key) => (
               <Key key={key} keyVal={key}>
                  {key}
               </Key>
            ))}
         </div>
         <div className="line2">
            {line2_keys.map((key) => (
               <Key key={key} keyVal={key}>
                  {key}
               </Key>
            ))}
         </div>
         <div className="line3">
            <Key keyVal="ENTER" bigKey />
            {line3_keys.map((key) => (
               <Key key={key} keyVal={key}>
                  {key}
               </Key>
            ))}
            <Key keyVal="DELETE" bigKey />
         </div>
      </div>
   );
};

export default Keyboard;
