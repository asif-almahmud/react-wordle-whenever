import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { AppContext } from "./context";
import { initialBoard } from "./Words";

function App() {
   const [board, setBoard] = useState(initialBoard);
   const [currPosition, setCurrPosition] = useState({ row: 0, col: 0 });
   return (
      <AppContext.Provider
         value={{ board, setBoard, currPosition, setCurrPosition }}
      >
         <div className="App">
            <nav>
               <h1>Wordle Whenever</h1>
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
