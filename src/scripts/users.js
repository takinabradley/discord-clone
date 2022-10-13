import uniquid from "uniquid"

function User(name) {
  const id = uniquid()
  const servers = []

  function addServer(serverID) {
    if (servers.includes(serverID) || typeof serverID !== 'string') return
    servers.push(serverID)
    return this;
  }

  return Object.freeze({
    get name() { return name },
    get id() {return id},
    get servers() { return [...servers] },
    addServer
  })
}

const Users = (function Users() {
  const users = []

  function add(name) {
    const newUser = User(name)
    users.push(newUser)
    return newUser
  }

  function find(id) {
    return users.find(user => user.id === id)
  }

  return Object.freeze({
    get list() {return [...users]},
    add,
    find
  })
})()

export default Users;