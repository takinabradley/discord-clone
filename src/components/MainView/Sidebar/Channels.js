import React from 'react'
import ChannelLink from './ChannelLink'

export default function Channels({ currentServer }) {
  
  const channelLinks = currentServer.channels.map(channel =>
    <ChannelLink channelName={channel.name} channelType={channel.type} />
  )

  return (
    <div className="channels">
      {channelLinks}
    </div>
  )
}