import React from 'react'
import ServerIcon from './ServerIcon'
import './ServerSidebar.css'
export default function ServerSidebar({serverList, serverID, onChangeServer, onAddServer}) {

  const serverIcons = serverList.map((server, index) => (
    <ServerIcon serverName={server.img} key={index} />
  ))

  return (
    <nav className="server-sidebar">
      {serverIcons}
      <button onClick={() => onAddServer('a')}>Add</button>
    </nav>
  )
}