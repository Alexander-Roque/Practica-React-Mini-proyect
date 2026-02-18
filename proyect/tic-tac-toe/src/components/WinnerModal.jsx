import Square from "./Square";
import "../App.css"

export function WinnerModal ({winner, resetGame}) {
    if (winner === null) return null;

    const winnerText = winner === false ? "Empate" : "Gano"

    return (
        <section className="winner">
            <div className='text'>
            <h2>
                {winnerText}
            </h2>
            <header className='min'>
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
    )
}