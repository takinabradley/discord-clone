import uniquid from "uniquid"

function Channel(name, type, description) {
  if (typeof name !== 'string' || typeof type !== 'string') return;

  const id = uniquid();
  const history = []
  return Object.freeze({
    name,
    type,
    id,
    description,
    history
  })
}


function Server(name, img) {
  const id = uniquid()
  const channels = [Channel('General', 'text')] //defaults with a general text channel

  return Object.freeze({
    name,
    img,
    id,
    channels,
  })
}


const Servers = (function () {
  const servers = {}

  function add(name, img) {
    const newServer = Server(name, img)
    servers[newServer.id] = newServer
    return { ...newServer };
  }
  
  function fetch(idArray) {
    const fetchedServers = {}
    idArray.forEach(id => {
      if(servers[id] !== undefined) fetchedServers[id] = {...servers[id]}
    })

    return fetchedServers
  }

  function update(newServer) {
    servers[newServer.id] = newServer
    return { ...newServer }
  }

  function createChannel(name, img) {
    return Channel(name, img)
  }

  function remove(id) {
    delete servers[id]
    return [...servers];
  }

  return {
    get list() {return {...servers}},
    add, 
    fetch,
    remove,
    createChannel,
    update
  }
})()


/* function cloneServer(server) {
  return {
    ...server,
    channels: server.channels.map(channel => ({
      ...channel,
      history: channel.history.map(item => ({...item}))
    }))
  }
} */

export default Servers