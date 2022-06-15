import { useContext } from "react";
import { AppContext } from "../context";

const Key = ({ keyVal, bigKey }) => {
   const { onSelectEnter, onSelectDelete, onSelectLetter } =
      useContext(AppContext);

   const onSelectKey = () => {
      if (keyVal === "ENTER") {
         onSelectEnter();
      } else if (keyVal === "DELETE") {
         onSelectDelete();
      } else {
         onSelectLetter(keyVal);
      }
   };
   return (
      <div className="key" id={bigKey && "big"} onClick={onSelectKey}>
         {keyVal}
      </div>
   );
};

export default Key;
