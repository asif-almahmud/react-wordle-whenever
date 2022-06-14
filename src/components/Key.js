import { useContext } from "react";
import { AppContext } from "../context";

const Key = ({ keyVal, bigKey }) => {
   const { board, setBoard, currPosition, setCurrPosition } =
      useContext(AppContext);
   const selectLetter = () => {
      const newBoard = [...board];
      newBoard[currPosition.row][currPosition.col] = keyVal;
      setBoard(newBoard);
      setCurrPosition((curr) => {
         curr.col++;
         if (curr.col === 6) {
            curr.row++;
            curr.col = 0;
         }
         if (curr.row === 6) {
            curr.row = 0;
         }
         return curr;
      });
   };
   return (
      <div className="key" id={bigKey && "big"} onClick={selectLetter}>
         {keyVal}
      </div>
   );
};

export default Key;
