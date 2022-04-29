import React from 'react'

import { keyRow1, keyRow2, keyRow3 } from '../../models/boardDataStore'

import Key from './Key'
import './Keyboard.css'

import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'

function Keyboard() {
  return (
    <div className='keyboard'>
      <div className='keyboard__row'>
        {keyRow1.map((key) => (
          <Key key={key} letter={key} />
        ))}
      </div>
      <div className='keyboard__row'>
        {keyRow2.map((key) => (
          <Key key={key} letter={key} />
        ))}
      </div>

      <div className='keyboard__row'>
        <Key letter={'ENTER'} purpose='ENTER' />
        {keyRow3.map((key) => (
          <Key key={key} letter={key} />
        ))}

        <Key letter={<BackspaceOutlinedIcon />} purpose='DELETE' />
      </div>
    </div>
  )
}

export default Keyboard
