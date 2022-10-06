import React from 'react'
import ServerIcon from './ServerIcon'
import addIcon from '../../../images/add.svg'
import './ServerSidebar.css'
export default function ServerSidebar({serverList, currentServer, onChangeServer, onAddServer}) {

  const serverIcons = serverList.map((server, index) => (
    <ServerIcon img={server.img} name={server.name} key={index} onClick={() => onChangeServer(server.name)}
      isSelected={currentServer === server.name ? true : false} />
  ))

  return (
    <nav className="server-sidebar">
      {serverIcons}
      <ServerIcon onClick={() => onAddServer(serverIcons.length + 1)} img={addIcon} name='add-server'>Add</ServerIcon>
    </nav>
  )
}