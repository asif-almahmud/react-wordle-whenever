import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { AppContext } from "./context";
import { initialBoard } from "./Words";

function App() {
   const [board, setBoard] = useState(initialBoard);
   return (
      <AppContext.Provider value={{ board, setBoard }}>
         <div className="App">
            <nav>
               <h1>Wordle Whenever</h1>
            </nav>
            <Board />
            <Keyboard />
         </div>
      </AppContext.Provider>
   );
}

export default App;
