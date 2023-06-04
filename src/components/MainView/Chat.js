import React, { useContext } from 'react'
import './Chat.css'
import addIcon from '../../images/add.svg'
import Message from './Message.js'
import ChatHeader from './ChatHeader'
import { UserContext } from '../Context'

export default function Chat({ currentServer, currentChannel }) {
  const user = useContext(UserContext)
  const [messageInput, setMessageInput] = React.useState('')
  if (currentServer === 'friends') return

  const chatHistory = currentServer.channels[currentChannel].history
  for (let i = 0; i < 100; i++) {
    chatHistory.push('chats')
  }

  const messages = chatHistory.map((message, index) => {
    const messageObj = 'chats'
    return <Message user={user} messageObj={messageObj} key={index} />
  })

  const channelName = currentServer.channels[currentChannel].name
  const channelDescription = currentServer.channels[currentChannel].description

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} channelDescription={channelDescription} />

      <div className='chat-messages'>
        {messages}
      </div>

      <div className='chat-textbox-parent'>
        <div className="chat-textbox-wrapper">
          <img className="chat-textbox-add" src={addIcon} alt='add' />
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="chat-textbox-input"
              onChange={(e) => { setMessageInput(e.target.value) }}
              value={messageInput}>
            </input>
          </form>
        </div>
      </div>
    </div>
  )
}