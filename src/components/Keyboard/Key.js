import React, { useContext } from 'react'

import { AppContext } from '../../App'

function Key({ letter, purpose }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(
    AppContext
  )

  const selectLetter = () => {
    const newBoard = [...board]

    // Check if key being pressed is a letter
    if (letter.length === 1) {
      // Stop after 5 letters
      if (currentAttempt.letterPos < 5) {
        newBoard[currentAttempt.row][currentAttempt.letterPos] = letter
        setBoard(newBoard)
        setCurrentAttempt({
          ...currentAttempt,
          letterPos: currentAttempt.letterPos + 1
        })
      }
    } else if (letter === 'ENTER') {
      // Only allow Enter if all 5 tiles are populated
      if (currentAttempt.letterPos !== 5) return
      setCurrentAttempt({ row: currentAttempt.row + 1, letterPos: 0 })
    } else {
      // No delete on first letter position
      if (currentAttempt.letterPos === 0) return
      newBoard[currentAttempt.row][currentAttempt.letterPos - 1] = ''
      setBoard(newBoard)
      setCurrentAttempt({
        ...currentAttempt,
        letterPos: currentAttempt.letterPos - 1
      })
    }
  }

  return (
    <div className='keyboard__key' id={purpose} onClick={selectLetter}>
      {letter}
    </div>
  )
}

export default Key
