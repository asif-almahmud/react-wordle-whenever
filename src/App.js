import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { AppContext } from "./context";
import { initialBoard } from "./Words";

function App() {
   const [board, setBoard] = useState(initialBoard);
   const [currPosition, setCurrPosition] = useState({ row: 0, col: 0 });

   const onEnterPress = () => {
      if (currPosition.col !== 5) return;
      setCurrPosition({ row: currPosition.row + 1, col: 0 });
   };

   const onDeletePress = () => {
      if (currPosition.col === 0) return;
      const newBoard = [...board];
      newBoard[currPosition.row][currPosition.col - 1] = "";
      setBoard(newBoard);
      setCurrPosition({ ...currPosition, col: currPosition.col - 1 });
   };

   const onLetterPress = (letter) => {
      if (currPosition.col > 4) return;
      const newBoard = [...board];
      newBoard[currPosition.row][currPosition.col] = letter;
      setBoard(newBoard);
      setCurrPosition({ ...currPosition, col: currPosition.col + 1 });
   };

   const value = {
      board,
      setBoard,
      currPosition,
      setCurrPosition,
      onEnterPress,
      onDeletePress,
      onLetterPress,
   };

   return (
      <AppContext.Provider value={value}>
         <div className="App">
            <nav>
               <h1>Readle</h1>
            </nav>
            <div className="game">
               <Board />
               <Keyboard />
            </div>
         </div>
      </AppContext.Provider>
   );
}

export default App;
