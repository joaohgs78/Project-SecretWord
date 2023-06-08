import { useState, useRef } from 'react'
import './Game.css'

const Game = ({verifyLetter, 
        pickedWord, 
        pickedCategory,
        letters,
        guessedLetters, 
         wrongLetters, 
        guesses, 
        score,}) => {

            const [letter, setLetter] = useState('')
            const letterInputRef = useRef(null)

            const handleSubmit = (e) => {
                e.preventDefault()

                verifyLetter(letter)
                setLetter('')
                letterInputRef.current.focus()
            }

  return (
    <div>
      <div className="game">
        <p className="points">
            <span>Pontuação: {score}</span>
        </p>
        <h1>Advinhe a palavra:</h1>
        <h3 className="tip">
            Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativa(s).</p>

        <div className="wordContainer">
            {letters.map((letters, i) => (
                guessedLetters.includes(letters) ? (
                    <span keys={i} className='letter'>{letters}</span>
                ) : (
                    <span keys={i} className='blankSquare'></span>
                )
            ))}
        </div>
        <div className="letterContainer">
            <p>Tente adivinhar uma letra da palavra:</p>
            <form onSubmit={handleSubmit}>
                <input className='input1'  type="text" name='letter' maxLength='1' required 
                onChange={(e) => setLetter(e.target.value)}
                value={letter}
                ref={letterInputRef} />
                <button className="glow-on-hover">Jogar!</button>
            </form>
        </div>

        <div className="wrongLetterContainer">
            <p>Letras já utilizadas:</p>
                    {wrongLetters.map((letter, i) => (
                        <span key={i}>{letter}, </span>
                    ))}
        </div>

      </div>
    </div>
  )
}

export default Game
