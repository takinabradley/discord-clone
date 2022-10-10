import uniquid from "uniquid"

function User(name) {
  const id = uniquid()
  const serverList = []

  function addServer(serverID) {
    if (serverList.includes(serverID) || typeof serverID !== 'string') return
    serverList.push(serverID)
    return this;
  }

  return Object.freeze({
    get name() { return name },
    get id() {return id},
    get servers() { return [...serverList] },
    addServer
  })
}

const Users = (function Users() {
  const userList = []

  function add(name) {
    const newUser = User(name)
    userList.push(newUser)
    return newUser
  }

  function find(id) {
    return userList.find(user => user.id === id)
  }

  return Object.freeze({
    get list() {return [...userList]},
    add,
    find
  })
})()

export default Users;