import React from 'react'
import ServerIcon from './ServerIcon'
import addIcon from '../../../images/add.svg'
import defaultIcon from '../../../images/defaultImg.png'
import './ServerSidebar.css'
export default function ServerSidebar({serverList, currentServer, onChangeServer, onAddServer}) {

  const serverIcons = serverList.map((server, index) => (
    <ServerIcon img={server.img} name={server.name} key={server.id} onClick={() => onChangeServer(server.id)}
      isSelected={currentServer === server.id ? true : false} />
  ))

  return (
    <nav className="server-sidebar">
      {serverIcons}
      <ServerIcon onClick={() => onAddServer(serverIcons.length + 1, defaultIcon)} img={addIcon} name='add-server'>Add</ServerIcon>
    </nav>
  )
}