import React from 'react'
import './ChannelLink.css'
export default function ChannelLink({channelName, channelType, onClick, isSelected}) {
  const channelIcons = {
    text: '#'
  }

  return (
    <div className={isSelected ? 'channel-link-wrapper selected' : 'channel-link-wrapper'} onClick={onClick}>
      <div className="channel-link-icon">{channelIcons[channelType]}</div>
      <div className="channel-link-name">{channelName}</div>
    </div>
  )
}