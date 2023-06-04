import React from 'react'
import MainView from './components/MainView/MainView'
import SettingsView from './components/SettingsView'
import './App.css'
import { UserContext } from './components/Context.js'
import Users from './scripts/users'
import Servers from './scripts/servers'
import defaultImg from './images/defaultImg.png'
import { useEffect } from 'react'
/*Set up dummy user and server apis*/


function App() {
  const [appState, setAppState] = React.useState({
    viewMode: 'main',
    user: null,
    servers: []
  })

  useEffect(() => {
    const DefaultUser = Users.add('DefaultUser') //create default user
    const DefaultServer = Servers.add('Default', defaultImg) //create a server
    DefaultUser.servers = [DefaultServer.id]
    Users.update(DefaultUser)
    //DefaultUser.addServer(DefaultServer.id) //add serverID to user's list of servers

    setAppState({
      ...appState,
      user: DefaultUser,
      servers: Servers.fetch(DefaultUser.servers)
    })
  }, [])

  function addServer(name, img) {
    const newServer = Servers.add(name, img)
    const user = {...appState.user}
    user.servers.push(newServer.id)
    Users.update(user)
    setAppState({
      ...appState,
      user: user, 
      servers: { ...appState.servers, [newServer.id]: newServer }
    })
  }

  function addChannel(server, name, type, description) {
    //do not allow channels w/ same name and type
    const hasSameNameAndType = (el) => el.name === name && el.type === type
    if (server.channels.some(hasSameNameAndType)) return 
    server.channels.push(Servers.createChannel(name, type, description))

    Servers.update(server)
    setAppState({
      ...appState,
      servers: {...appState.servers, [server.id]: server}
    })
  }
  
  function changeViewMode() {
    if (appState.viewMode === 'main') {
      setAppState({...appState, viewMode: 'settings'})
    } else {
      setAppState({...appState, viewMode: 'main'})
    }
  }

  const views = {
    main:
      <MainView addServer={addServer} servers={appState.servers}
        addChannel={addChannel} />,
    settings:
      <SettingsView user={appState.user} addServer={addServer} />
  }

  return (
    <UserContext.Provider value={appState.user}>
      <div className='App' /* onClick={changeViewMode} */ >
        {views[appState.viewMode]}
      </div>
    </UserContext.Provider>
  )
}

export default App;
