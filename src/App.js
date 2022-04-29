import React, { createContext, useState } from 'react'

import { initialBoardState } from './models/boardDataStore'

import Header from './components/Header/Header'
import Board from './components/Board/Board'
import Keyboard from './components/Keyboard/Keyboard'

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(initialBoardState)
  const [currentAttempt, setCurrentAttempt] = useState({
    row: 0,
    letterPos: 0
  })

  const onSelectLetter = (letter) => {
    const newBoard = [...board]
    newBoard[currentAttempt.row][currentAttempt.letterPos] = letter
    setBoard(newBoard)
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1
    })
  }

  const onDelete = () => {
    const newBoard = [...board]
    newBoard[currentAttempt.row][currentAttempt.letterPos - 1] = ''
    setBoard(newBoard)
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1
    })
  }

  const onEnter = () => {
    setCurrentAttempt({ row: currentAttempt.row + 1, letterPos: 0 })
  }

  return (
    <div className='app'>
      <Header />
      {/* Wrap all necessary items in context, can pass through props */}
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onEnter,
          onDelete
        }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
