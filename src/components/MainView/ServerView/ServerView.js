import React, { useState } from "react"
import Sidebar from "./Sidebar/Sidebar"
import Chat from "./Chat/Chat"

export default function ServerView({ currentServer, addChannel }) {
  const [currentChannel, setCurrentChannel] = useState(0)
  const [prevServer, setPrevServer] = useState(currentServer.id)

  if (prevServer !== currentServer) {
    // set channel to 0 before render if server has been switched
    // this isn't in a useEffect so that the component is re-rendered before erroring
    setCurrentChannel(0)
    setPrevServer(currentServer)
  }

  return (
    <div className="ServerView" style={{ display: "flex", width: "100%" }}>
      <Sidebar
        currentServer={currentServer}
        onChangeChannel={setCurrentChannel}
        currentChannel={currentChannel}
        addChannel={addChannel}
      />
      <Chat currentServer={currentServer} currentChannel={currentChannel} />
    </div>
  )
}
