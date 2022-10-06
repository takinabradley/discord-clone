import React from "react";
import Chat from "./Chat";
import ServerSidebar from "./ServerSidebar/ServerSidebar";
import Sidebar from "./Sidebar/Sidebar";
/* import Channels from "./Sidebar/Channels";
import Friends from "./Sidebar/Friends"; */
import "./MainView.css";

export default function MainView() {
  const [state, setState] = React.useState({
    currentServer: 'some Server',
    currentChannel: 0,
    servers: [
      makeNewServer('some Server'),
      makeNewServer('another Server'),
    ],
  });

  function changeServer(ID) {
    setState({
      ...state,
      currentServer: ID,
      currentChannel: 0,
    });
  }

  function changeChannel(ID) {
    setState({
      ...state,
      currentChannel: ID,
    });
  }

  function makeNewServer(name) {
    return {
      img: '',
      name,
      channels: [
        {
          name: 'General',
          type: 'text',
          history: []
        }
      ]
    }
  }

  function addServer(name) {
    setState({
      ...state,
      servers: [
        ...state.servers,
        makeNewServer(name)
      ]
    });
  }

  return (
    <div className="main-view">
      <ServerSidebar
        onChangeServer={changeServer}
        onAddServer={addServer}
        currentServer={state.currentServer}
        serverList={state.servers}
      />

      <Sidebar
        currentServer={state.currentServer}
        onChangeChannel={changeChannel}
        currentChannel={state.currentChannel}
      />

      <Chat currentChannel={state.currentChannel} />
    </div>
  );
}
