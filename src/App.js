import React from 'react'
import MainView from './components/MainView/MainView'
import SettingsView from './components/SettingsView'
import './App.css'

const views = {
  main: <MainView />,
  settings: <SettingsView />
}

function App() {
  const [state, setState] = React.useState({
    viewMode: 'main',
  })

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
