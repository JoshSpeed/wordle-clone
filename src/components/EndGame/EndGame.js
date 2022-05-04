import React, { useContext } from 'react'

import { AppContext } from '../../App'

import './EndGame.css'

function EndGame() {
  const { endGame, currentAttempt, correctWord } = useContext(AppContext)

  return (
    <div className='endgame'>
      <h3>{endGame.guessedWord ? 'You guessed the word!' : 'You failed'}</h3>
      <h1>Correct: {correctWord}</h1>
      {endGame.guessedWord && (
        <h3>You guessed in {currentAttempt.row} attempts</h3>
      )}
    </div>
  )
}

export default EndGame
