import "./StartScreen.css"


const StartScreen = ({startGame}) => {
  return (
    <div className="start" >
        <h1>Palavra Secreta</h1>
        <p>Clique no botao abaixo para iniciar o jogo!</p>
        <button onClick={startGame}>Iniciar</button>
    </div>
  )
}

export default StartScreen