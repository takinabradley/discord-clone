import React from "react"
import "./Chat.css"
import addIcon from "../../../../images/add.svg"
import Message from "./Message.js"
import ChatHeader from "./ChatHeader"

export default function Chat({ currentServer, currentChannel }) {
  if (currentServer === "friends") return
  const chatHistory = currentServer.channels[currentChannel].history

  if (currentServer.channels.length === 0) {
    for (let i = 0; i < 25; i++) {
      chatHistory.push("chats " + i)
    }
  }

  const messages = chatHistory.map((message, index) => {
    return <Message user={null} messageObj={message} key={index} />
  })

  const channelName = currentServer.channels[currentChannel].name
  const channelDescription = currentServer.channels[currentChannel].description

  return (
    <div className="chat">
      <ChatHeader
        channelName={channelName}
        channelDescription={channelDescription}
      />

      <div className="chat-messages">{messages}</div>

      <div className="chat-textbox-parent">
        <div className="chat-textbox-wrapper">
          <img className="chat-textbox-add" src={addIcon} alt="add" />
          <input className="chat-textbox-input"></input>
        </div>
      </div>
    </div>
  )
}
