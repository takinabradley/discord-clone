import React, { useEffect, useState } from "react"
import MainView from "./components/MainView/MainView"
import SettingsView from "./components/SettingsView/SettingsView"
import "./App.css"

import Users from "./scripts/users"
import Servers from "./scripts/servers"
import defaultImg from "./images/defaultImg.png"

import { getDefaultUser, getUserServers } from "./modules/firebase/firestore"
/*Set up dummy user and server apis*/
const DefaultUser = Users.add("DefaultUser") //create default user
const DefaultServer = Servers.add("Default", defaultImg) //create a server
DefaultUser.addServer(DefaultServer.id) //add serverID to user's list of servers

function App() {
  const [viewMode, setViewMode] = useState("main")
  const [user, setUser] = useState(null)
  const [prevUser, setPrevUser] = useState(null)
  const [servers, setServers] = useState({})

  useEffect(() => {
    // load user and servers a user is subscribed to when app loads
    async function getUserAndServers() {
      const user = await getDefaultUser()
      console.log(user)
      setUser(user)
      setPrevUser(user)

      // this can probably exist in only the 'serverSidebar' component
      const servers = await getUserServers(user.servers)
      setServers(servers)
      console.log(servers)
    }
    if (user === null || prevUser?.name !== user.name) getUserAndServers()
  }, [user])

  function addServer(name, img) {
    const newServer = Servers.add(name, img)
    setUser(user.addServer(newServer.id))
    setServers({ ...servers, [newServer.id]: newServer })
  }

  function addChannel(server, name, type, description) {
    const newServer = server.addChannel(name, type, description)
    if (newServer === undefined) return //server already had a channel by that name and type
    setServers({ ...servers, [newServer.id]: newServer })
  }

  function changeViewMode() {
    if (viewMode === "main") {
      setViewMode("settings")
    } else {
      setViewMode("main")
    }
  }

  const views = {
    main: (
      <MainView
        addServer={addServer}
        servers={servers}
        addChannel={addChannel}
      />
    ),
    settings: <SettingsView user={user} addServer={addServer} />
  }

  return (
    <div className="App" /* onClick={changeViewMode} */>{views[viewMode]}</div>
  )
}

export default App
