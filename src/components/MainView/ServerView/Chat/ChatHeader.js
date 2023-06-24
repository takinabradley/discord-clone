import React from "react"
export default function ChatHeader({ channelName, channelDescription }) {
  return (
    <header className="chat-header">
      <div className="chat-header-left">
        <div className="header-channel">{"# " + channelName}</div>
        <div className="header-descripton">{"| " + channelDescription}</div>
      </div>

      <div className="chat-header-right">
        <div className="thread">Thread</div>
        <div className="notifications">Notifs</div>
        <div className="pins">Pins</div>
        <div className="List">List</div>
        <div className="search">Search</div>
        <div className="inbox">Inbox</div>
        <div className="Help">Help</div>
      </div>
    </header>
  )
}
