import React from 'react'
export default function ChannelLink({channelName, channelType}) {
  const channelIcons = {
    text: '#'
  }

  return (
    <div>{channelIcons[channelType] + channelName}</div>
  )
}