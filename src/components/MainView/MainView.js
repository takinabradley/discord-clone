import React, { useState } from "react"
import ServerSidebar from "./ServerSidebar/ServerSidebar"
import "./MainView.css"
import ServerView from "./ServerView/ServerView"

export default function MainView({ addServer, servers, addChannel }) {
  const [currentServer, setCurrentServer] = useState(
    servers[Object.keys(servers)[0]]
  )

  function changeServer(ID) {
    setCurrentServer(ID)
  }

  return (
    <div className="main-view">
      <ServerSidebar
        onChangeServer={changeServer}
        onAddServer={addServer}
        currentServer={currentServer}
        serverList={Object.values(servers)}
      />

      <ServerView
        currentServer={servers[currentServer] || "friends"}
        addChannel={addChannel}
      />
    </div>
  )
}
