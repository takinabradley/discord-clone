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

console.log('set up', DefaultUser)


function App() {
  const [state, setState] = React.useState({
    viewMode: 'main',
    user: DefaultUser,
  })

  const views = {
    main: <MainView user={state.user} addServer={addServer}/>,
    settings: <SettingsView user={state.user} addServer={addServer} />
  }

  function addServer(name, img) {
    const id = Servers.add(name, img).id
    state.user.addServer(id)
    setState({
      ...state,
      user: {...DefaultUser}, //allows state change without bugs by copying defaultUser every time it changes
    })
  }

  function changeViewMode() {
    if (state.viewMode === 'main') {
      setState({...state, viewMode: 'settings'})
    } else {
      setState({...state, viewMode: 'main'})
    }
  }

  return (
    <div className='App' /* onClick={changeViewMode} */ >
      {views[state.viewMode]}
    </div>
  )
}

export default App;
