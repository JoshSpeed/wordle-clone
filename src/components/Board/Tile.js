import React, { useContext, useEffect } from 'react'

import { AppContext } from '../../App'

function Tile({ letterPos, row }) {
  // Can now access the props from the hook
  const {
    board,
    correctWord,
    currentAttempt,
    disabledLetters,
    setDisabledLetters
  } = useContext(AppContext)
  const letter = board[row][letterPos]

  // Check if letter matches posiiton of correct letter in guess word
  const correct = correctWord[letterPos] === letter
  const almost = !correct && letter !== '' && correctWord.includes(letter)

  const letterState =
    currentAttempt.row > row &&
    (correct ? 'correct' : almost ? 'almost' : 'error')

  useEffect(() => {
    if (letter !== '' && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter])
    }
  }, [currentAttempt.row])

  // Check the current board state and assign letter to corresponding timke
  return (
    <div className='board__rowSquare' id={letterState}>
      {letter}
    </div>
  )
}

export default Tile
