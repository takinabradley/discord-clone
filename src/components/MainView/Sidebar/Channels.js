import React from 'react'
import ChannelLink from './ChannelLink'
import './Channels.css'

export default function Channels({ currentServer, addChannel }) {
  if(!currentServer) return
  const channelLinks = currentServer.channels.map( channel =>
    <ChannelLink channelName={channel.name} channelType={channel.type}
      key={channel.id} />
  )

  return (
    <div className="channels">
      {channelLinks}
      <button onClick={() => addChannel(currentServer, `${currentServer.channels.length + 1}`, 'text')}>+</button>
    </div>
  )
}