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

  return (
    <div className='app'>
      <Header />
      {/* Wrap all necessary items in context, can pass through props */}
      <AppContext.Provider
        value={{ board, setBoard, currentAttempt, setCurrentAttempt }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
