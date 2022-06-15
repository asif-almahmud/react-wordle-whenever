import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../context";
import Key from "./Key";

const Keyboard = () => {
   const { onSelectEnter, onSelectDelete, onSelectLetter } =
      useContext(AppContext);
   const line1_keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
   const line2_keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
   const line3_keys = ["Z", "X", "C", "V", "B", "N", "M"];

   const handleUserKeyboard = useCallback((event) => {
      if (event.key === "Enter") {
         onSelectEnter();
      } else if (event.key === "Backspace") {
         onSelectDelete();
      } else {
         [...line1_keys, ...line2_keys, ...line3_keys].forEach((letter) => {
            if (event.key.toLowerCase() === letter.toLowerCase()) {
               onSelectLetter(letter);
            }
         });
      }
   });

   useEffect(() => {
      document.addEventListener("keydown", handleUserKeyboard);

      return () => {
         document.removeEventListener("keydown", handleUserKeyboard);
      };
   }, [handleUserKeyboard]);

   return (
      <div className="keyboard" onKeyDown={handleUserKeyboard}>
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
