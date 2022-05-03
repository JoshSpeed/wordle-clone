import React, { useEffect, useCallback, useContext } from 'react'

import {
  keyRow1,
  keyRow2,
  keyRow3,
  alphabet
} from '../../models/boardDataStore'

import { AppContext } from '../../App'

import Key from './Key'
import './Keyboard.css'

import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'

function Keyboard() {
  const { onSelectLetter, onDelete, onEnter, disabledLetters } = useContext(
    AppContext
  )

  // Watch document for keydowns
  const handleKeyboard = useCallback((event) => {
    if (event.key === 'Enter') {
      onEnter()
    } else if (event.key === 'Backspace') {
      onDelete()
    } else {
      if (alphabet.includes(event.key.toUpperCase())) {
        onSelectLetter(event.key.toUpperCase())
      }
    }
  })

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)

    return () => {
      document.removeEventListener('keydown', handleKeyboard)
    }
  }, [handleKeyboard])

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className='keyboard__row'>
        {keyRow1.map((key) => (
          <Key
            key={key}
            letter={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>
      <div className='keyboard__row'>
        {keyRow2.map((key) => (
          <Key
            key={key}
            letter={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>

      <div className='keyboard__row'>
        <Key letter={'ENTER'} purpose='ENTER' />
        {keyRow3.map((key) => (
          <Key
            key={key}
            letter={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}

        <Key letter={<BackspaceOutlinedIcon />} purpose='DELETE' />
      </div>
    </div>
  )
}

export default Keyboard
