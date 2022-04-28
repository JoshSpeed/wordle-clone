import React from 'react'

import './Header.css'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined'

function Header() {
  return (
    <div className='header'>
      <div className='header__innerGroup'>
        <InfoOutlinedIcon className='header__icons' />
        <h1>WORDLE</h1>
        <LeaderboardOutlinedIcon className='header__icons' />
      </div>
    </div>
  )
}

export default Header
