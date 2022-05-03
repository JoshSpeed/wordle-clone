import React, { useContext } from 'react'

import { AppContext } from '../../App'

function Key({ letter, purpose, disabled }) {
  const { currentAttempt, onSelectLetter, onEnter, onDelete } = useContext(
    AppContext
  )

  const selectLetter = () => {
    // Check if key being pressed is a letter
    if (letter.length === 1) {
      // Stop after 5 letters
      if (currentAttempt.letterPos < 5) {
        onSelectLetter(letter)
      }
    } else if (letter === 'ENTER') {
      // Only allow Enter if all 5 tiles are populated
      if (currentAttempt.letterPos !== 5) return
      onEnter()
    } else {
      // No delete on first letter position
      if (currentAttempt.letterPos === 0) return
      onDelete()
    }
  }

  return (
    <div
      className='keyboard__key'
      id={purpose ? purpose : disabled && 'disabled'}
      onClick={selectLetter}
    >
      {letter}
    </div>
  )
}

export default Key
