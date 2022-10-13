import React from "react";
import Chat from "./Chat";
import ServerSidebar from "./ServerSidebar/ServerSidebar";
import Sidebar from "./Sidebar/Sidebar";
import "./MainView.css";


export default function MainView({ addServer, servers, addChannel }) {
  const [state, setState] = React.useState({              
    currentServer: servers[0].id,
    currentChannel: 0,
  });

  function changeServer(ID) {
    setState({
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

  return (
    <div className="main-view">
      <ServerSidebar
        onChangeServer={changeServer}
        onAddServer={addServer}
        currentServer={state.currentServer}
        serverList={servers}
      />

      <Sidebar
        currentServer={servers.find(server => state.currentServer === server.id)}
        onChangeChannel={changeChannel}
        currentChannel={state.currentChannel}
        addChannel={addChannel}
      />

      <Chat currentChannel={state.currentChannel} />
    </div>
  );
}
