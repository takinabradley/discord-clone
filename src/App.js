import React from 'react'
import MainView from './components/MainView/MainView'
import SettingsView from './components/SettingsView'
import './App.css'
import Users from './scripts/users'
import Servers from './scripts/servers'
import defaultImg from './images/defaultImg.png'
/*Set up dummy user and server apis*/
const DefaultUser = Users.add('DefaultUser') //create default user
const DefaultServer = Servers.add('Default', defaultImg) //create a server
DefaultUser.addServer(DefaultServer.id) //add serverID to user's list of servers

function App() {
  const [state, setState] = React.useState({
    viewMode: 'main',
    user: DefaultUser,
    servers: DefaultUser.servers.map(serverID => Servers.fetch(serverID))
  })

  function addServer(name, img) {
    const newServer = Servers.add(name, img)
    setState({
      ...state,
      user: state.user.addServer(newServer.id), 
      servers: [...state.servers, newServer]
    })
  }

  function addChannel(server, name, type, description) {
    const newServer = server.addChannel(name, type, description)
    if(newServer === undefined) return //server already had a channel by that name and type

    const newServers = state.servers.map(server => {
      if (server.id === newServer.id) return newServer
      return server
    })
    setState({
      ...state,
      servers: newServers
    })
  }
  
  function changeViewMode() {
    if (state.viewMode === 'main') {
      setState({...state, viewMode: 'settings'})
    } else {
      setState({...state, viewMode: 'main'})
    }
  }

  const views = {
    main:
      <MainView addServer={addServer} servers={state.servers}
        addChannel={addChannel} />,
    settings:
      <SettingsView user={state.user} addServer={addServer} />
  }

  return (
    <div className='App' /* onClick={changeViewMode} */ >
      {views[state.viewMode]}
    </div>
  )
}

export default App;
