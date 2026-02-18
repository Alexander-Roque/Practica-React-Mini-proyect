import './App.css'
import * as React from "react";
import confetti from "canvas-confetti";
import Square from './components/Square';
import { TURNS } from './constan';
import { checkWinnerFrom } from './logic/board';
import { WinnerModal } from './components/WinnerModal';
import { checkEndGame } from './logic/board';

function App() {
  const [board, setBoard] = React.useState(()=> {
    const boardFromStorage = window.localStorage.getItem("board")
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });
  const [turn, setTurns] = React.useState(()=>{
    const turnFromLocalStorage = window.localStorage.getItem("turn")
    return turnFromLocalStorage ?? TURNS.X
  });
  const [winner, setWinner] = React.useState(null)

  // const checkEndGame = (newBoard) => {
  //   return newBoard.every((square)=> square !== null)
  // }

  const updateBoard = (index) =>{
    if(board[index] || winner) return;

    // esto dice que crees un nuevo array con los valores de mi otro array para poder manipularlo, ya que es un estado y los estados deben ser inmutables
    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurns(newTurn)
    // guardar partida
    window.localStorage.setItem("board",JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn)

    // revisamos si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      console.log(setWinner(newWinner)) // da undefined porque es los estados son asincrono, si esta guardado el valor "X" o "y"
      confetti()
      setWinner(newWinner) // la actualizacion del estado es asincrono
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurns(TURNS.X);
    setWinner(null)

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  }
  React.useEffect(()=>{
    console.log("Cori rey Pixie")
  },[winner])

 return (
  <main className='board'>
    <h1>Tic-Tac-Toe</h1>
    <button onClick={resetGame}>Reset</button>
    <section className='game'>
      {board.map((_,index)=>{
        return (
          <Square
          key={index}
          index ={index}
          updateBoard={updateBoard}>
            {board[index]}
            </Square> 
        )
      })}
    </section>
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
    {/* {winner !== null && (
      <WinnerModal resetGame={resetGame} winner={winner} />
    )} */}
    <WinnerModal resetGame={resetGame} winner={winner}/>
  </main>
 )
}

export default App

// averiguar como funcionan los operadores logicos en React y como se enfrentan con los componentes