import React from 'react'
import ChannelLink from './ChannelLink'
import Channels from './Channels'
import Friends from './Friends'
import './Sidebar.css'
export default function Sidebar({currentServer, currentChannel, onChangeChannel}) {
  
  return (
    <nav className="sidebar">
      {
        (currentServer === 'friends') ?
          <Friends /> : <Channels currentServer={currentServer} /> 
      }
    </nav>
  )
}