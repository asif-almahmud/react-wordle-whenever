import { useContext } from "react";
import { AppContext } from "../context";

const Letter = ({ letterPosition, attemptValue }) => {
   const { board } = useContext(AppContext);
   const letter = board[attemptValue][letterPosition];
   return <div className="letter">{letter}</div>;
};

export default Letter;
