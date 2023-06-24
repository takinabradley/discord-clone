import React from "react"
import ChannelLink from "./ChannelLink"
import "./Channels.css"

export default function Channels({
  currentServer,
  addChannel,
  currentChannel,
  changeChannel
}) {
  if (!currentServer) return
  const channelLinks = currentServer.channels.map((channel, index) => (
    <ChannelLink
      channelName={channel.name}
      channelType={channel.type}
      key={channel.id}
      onClick={() => changeChannel(index)}
      isSelected={currentChannel === index ? true : false}
    />
  ))

  return (
    <div className="channels">
      {channelLinks}
      <button
        onClick={() =>
          addChannel(
            currentServer,
            `${currentServer.channels.length + 1}`,
            "text",
            "channel description"
          )
        }
      >
        +
      </button>
    </div>
  )
}
