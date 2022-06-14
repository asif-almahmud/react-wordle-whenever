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
         if (curr.col < 4) {
            return { ...curr, col: curr.col + 1 };
         } else if (curr.col === 4) {
            return { ...curr, col: 0, row: curr.row + 1 };
         }
      });
   };
   return (
      <div className="key" id={bigKey && "big"} onClick={selectLetter}>
         {keyVal}
      </div>
   );
};

export default Key;
