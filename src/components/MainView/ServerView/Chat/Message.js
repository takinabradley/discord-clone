import React from "react"
import "./Message.css"

export default function Message({ user, messageObj }) {
  const timeArray = new Date().toLocaleTimeString().split(" ")
  timeArray[0] = timeArray[0].substring(0, timeArray[0].length - 3)
  const time = timeArray.join(" ")
  return (
    <div className="chat-message">
      <div className="chat-date">{time}</div>
      <div className="chat-message-contents">{messageObj}</div>
    </div>
  )
}
