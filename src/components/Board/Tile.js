import React, { useContext } from 'react'

import { AppContext } from '../../App'

function Tile({ letterPos, row }) {
  // Can now access the props from the hook
  const { board } = useContext(AppContext)
  // Check the current board state and assign letter to corresponding timke
  return <div className='board__rowSquare'>{board[row][letterPos]}</div>
}

export default Tile
