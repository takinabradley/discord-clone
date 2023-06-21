import React from 'react'
import Channels from './Channels/Channels'
import Friends from './Friends'
import './Sidebar.css'
export default function Sidebar({currentServer, currentChannel, onChangeChannel, addChannel}) {
  
  const list = (currentServer === 'friends') 
    ? <Friends /> 
    : <Channels 
        currentServer={currentServer} 
        addChannel={addChannel} 
        currentChannel={currentChannel} 
        changeChannel={onChangeChannel} 
      /> 

  return (
    <nav className="sidebar">
      {list}
    </nav>
  )
}