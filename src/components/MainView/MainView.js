import React from "react";
import Chat from "./Chat";
import ServerSidebar from "./ServerSidebar/ServerSidebar";
import Sidebar from "./Sidebar/Sidebar";
import "./MainView.css";


export default function MainView({ addServer, servers, addChannel }) {
  const [state, setState] = React.useState({              
    currentServer: servers[Object.keys(servers)[0]],
    currentChannel: 0,
  });

  function changeServer(ID) {
    setState({
      currentServer: ID,
      currentChannel: 0,
    });
  }

  function changeChannel(ID) {
    console.log(ID)
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
        serverList={Object.values(servers)}
      />

      <Sidebar
        currentServer={servers[state.currentServer] || 'friends'}
        onChangeChannel={changeChannel}
        currentChannel={state.currentChannel}
        addChannel={addChannel}
      />

      <Chat currentServer={servers[state.currentServer] || 'friends'} currentChannel={state.currentChannel} />
    </div>
  );
}
