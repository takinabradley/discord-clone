import React, {useMemo} from "react";
import Chat from "./Chat";
import ServerSidebar from "./ServerSidebar/ServerSidebar";
import Sidebar from "./Sidebar/Sidebar";
import "./MainView.css";
import Users from '../../scripts/users.js'
import Servers from '../../scripts/servers.js'


export default function MainView({ user, addServer, servers, addChannel }) {
  const [state, setState] = React.useState({              
    currentServer: user.servers[0],
    currentChannel: 0,
  });

  if (user === null) return
  
  /* const servers = user.servers.map(serverID => Servers.fetch(serverID)) 
  console.log('user', state.user) */

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

/*   function addChannel() {
    const server = servers.find(server => state.currentServer === server.id).addChannel('new', 'text')
  } */

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
