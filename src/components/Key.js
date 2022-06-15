import { useContext } from "react";
import { AppContext } from "../context";

const Key = ({ keyVal, bigKey }) => {
   const { onEnterPress, onDeletePress, onLetterPress } =
      useContext(AppContext);

   const onKeySelect = () => {
      if (keyVal === "ENTER") {
         onEnterPress();
      } else if (keyVal === "DELETE") {
         onDeletePress();
      } else {
         onLetterPress(keyVal);
      }
   };
   return (
      <div className="key" id={bigKey && "big"} onClick={onKeySelect}>
         {keyVal}
      </div>
   );
};

export default Key;
