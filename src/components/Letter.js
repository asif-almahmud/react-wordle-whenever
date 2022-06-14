import { useContext } from "react";
import { AppContext } from "../context";

const Letter = ({ row, col }) => {
   const { board } = useContext(AppContext);
   const letter = board[row][col];
   return <div className="letter">{letter}</div>;
};

export default Letter;
