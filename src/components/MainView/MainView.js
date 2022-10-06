import React from "react";
import Chat from "./Chat";
import ServerSidebar from "./ServerSidebar/ServerSidebar";
import Sidebar from "./Sidebar/Sidebar";
/* import Channels from "./Sidebar/Channels";
import Friends from "./Sidebar/Friends"; */
import "./MainView.css";

export default function MainView() {
  const [state, setState] = React.useState({
    serverID: 0,
    channelID: 0,
    servers: [
      makeNewServer('some Server'),
      makeNewServer('another Server'),
    ],
  });

  function changeServer(ID) {
    setState({
      ...state,
      serverID: ID,
      channelID: 0,
    });
  }

  function changeChannel(ID) {
    setState({
      ...state,
      channelID: ID,
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
        serverID={state.serverID}
        serverList={state.servers}
      />

      <Sidebar
        serverID={state.serverID}
        onChangeChannel={changeChannel}
        channelID={state.channelID}
      />

      <Chat channelID={state.channelID} />
    </div>
  );
}
