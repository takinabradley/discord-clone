import React, { useEffect, useMemo, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'

// https://stackoverflow.com/questions/63711013/how-to-trigger-useeffects-before-render-in-react
const useBeforeRender = (callback, deps) => {
  const [isRun, setIsRun] = useState(false);

  if (!isRun) {
      callback();
      setIsRun(true);
  }

  // check if deps has changed, if it has state will be set to true and the callback will be run
  useEffect(() => () => setIsRun(false), deps);

};

export default function ServerView({currentServer, addChannel}) {
  const [currentChannel, setCurrentChannel] = useState(0)
  // useBeforeRender: similar to componentWillMount, allows state changes depending on props before rendering.
  // Set the current channel to 0 before rendering if the currentServer prop changes
  useBeforeRender(selectFirstchannel, [currentServer])


  function selectFirstchannel() {
    setCurrentChannel(0)
  }

  return (
    <div className="ServerView" style={{display: 'flex', width: '100%'}}>
      <Sidebar currentServer={currentServer} onChangeChannel={setCurrentChannel} currentChannel={currentChannel} addChannel={addChannel}/>
      <Chat currentServer={currentServer} currentChannel={currentChannel}/>
    </div>
  )
}