import React from 'react'
import './ChannelLink.css'
export default function ChannelLink({channelName, channelType}) {
  const channelIcons = {
    text: '#'
  }

  return (
    <div className={'channel-link-wrapper'}>
      <div className="channel-link-icon">{channelIcons[channelType]}</div>
      <div className="channel-link-name">{channelName}</div>
    </div>
  )
}