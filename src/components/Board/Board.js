import React, { useState } from 'react'

import { boardState } from '../../models/boardDataStore'

import Tile from './Tile'
import './Board.css'

function Board() {
  return (
    <div className='board'>
      <div className='board__row'>
        <Tile letterPos={0} row={0} />
        <Tile letterPos={1} row={0} />
        <Tile letterPos={2} row={0} />
        <Tile letterPos={3} row={0} />
        <Tile letterPos={4} row={0} />
      </div>
      <div className='board__row'>
        <Tile letterPos={0} row={1} />
        <Tile letterPos={1} row={1} />
        <Tile letterPos={2} row={1} />
        <Tile letterPos={3} row={1} />
        <Tile letterPos={4} row={1} />
      </div>
      <div className='board__row'>
        <Tile letterPos={0} row={2} />
        <Tile letterPos={1} row={2} />
        <Tile letterPos={2} row={2} />
        <Tile letterPos={3} row={2} />
        <Tile letterPos={4} row={2} />
      </div>
      <div className='board__row'>
        <Tile letterPos={0} row={3} />
        <Tile letterPos={1} row={3} />
        <Tile letterPos={2} row={3} />
        <Tile letterPos={3} row={3} />
        <Tile letterPos={4} row={3} />
      </div>
      <div className='board__row'>
        <Tile letterPos={0} row={4} />
        <Tile letterPos={1} row={4} />
        <Tile letterPos={2} row={4} />
        <Tile letterPos={3} row={4} />
        <Tile letterPos={4} row={4} />
      </div>
      <div className='board__row'>
        <Tile letterPos={0} row={5} />
        <Tile letterPos={1} row={5} />
        <Tile letterPos={2} row={5} />
        <Tile letterPos={3} row={5} />
        <Tile letterPos={4} row={5} />
      </div>
    </div>
  )
}

export default Board
