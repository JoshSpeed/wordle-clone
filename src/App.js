import React from 'react'

import Header from './components/Header/Header'
import Board from './components/Board/Board'
import Keyboard from './components/Keyboard/Keyboard'

function App() {
  return (
    <div className='app'>
      <Header />
      <Board />
      <Keyboard />
    </div>
  )
}

export default App
