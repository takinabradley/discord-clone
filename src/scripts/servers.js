import uniquid from "uniquid"

function Channel(name, type, description) {
  if (typeof name !== 'string' || typeof type !== 'string') return;

  const id = uniquid();
  const history = []
  return Object.freeze({
    get name() {return name}, 
    type,
    id,
    get description() {return description},
    get history() {return [...history]}
  })
}


function Server(name, img) {
  const id = uniquid()
  const channels = [Channel('General', 'text')] //defaults with a general text channel
  function addChannel(name, type, description) {
    if (
      channels.findIndex(
        (channel) => channel.name === name && channel.type === type
      ) !== -1
    ) return;

    channels.push(Channel(name, type, description));
    return this;
  }

  return Object.freeze({
    get name() {return name}, 
    get img() {return img},
    id,
    get channels() { return [...channels] },
    addChannel
  })
}


const Servers = (function () {
  const servers = []

  function add(name, img) {
    const newServer = Server(name, img)
    servers.push(newServer)
    return newServer;
  }
  
  function fetch(id) {
    const server = servers.find(server => server.id === id)
    return server
  }

  function remove(id) {
    servers.splice(servers.findIndex(id))
    return [...servers];
  }

  return {
    get list() {return [...servers]},
    add, 
    fetch,
    remove
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