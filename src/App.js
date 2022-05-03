import React, { createContext, useState, useEffect } from 'react'

import { initialBoardState, generateWordSet } from './models/boardDataStore'

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
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])

  const correctWord = 'RIGHT'

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
    })
  }, [])

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
    if (currentAttempt.letterPos === 0) return
    const newBoard = [...board]
    newBoard[currentAttempt.row][currentAttempt.letterPos - 1] = ''
    setBoard(newBoard)
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1
    })
  }

  const onEnter = () => {
    if (currentAttempt.letterPos < 5) return

    let currentWord = ''
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.row][i]
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({ row: currentAttempt.row + 1, letterPos: 0 })
    } else {
      alert('Word not found')
    }

    if (currentWord === correctWord) {
      alert('Game Won')
    }
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
          onDelete,
          correctWord,
          setDisabledLetters,
          disabledLetters
        }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
