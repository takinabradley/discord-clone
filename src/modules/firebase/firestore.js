import app from "./firebaseApp"
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  addDoc
} from "firebase/firestore"

const db = getFirestore(app)

/* const projectsCollectionRef = collection(db, "projects")
let userDoc

function setProjectsDoc(userId) {
  userDoc = doc(db, `projects/${userId}`)
}

async function readProjects() {
  const snapshot = await getDoc(userDoc)
  if (snapshot.exists()) {
    return snapshot.data()
  }
}

async function writeProjects(data) {
  setDoc(userDoc, data)
}

export default { setProjectsDoc, readProjects, writeProjects } */

const userCollectionRef = collection(db, "Users")

export async function getUser(userID) {
  const userDocRef = doc(db, `Users/${userID}`)
  const snapshot = await getDoc(userDocRef)
  if (snapshot.exists()) return snapshot.data()
}

export async function getDefaultUser() {
  return await getUser("Default")
}

export async function getUserServers(serverIDs) {
  const serverDocRefs = serverIDs.map((serverID) =>
    doc(db, `Servers/${serverID}`)
  )
  const serverSnapShots = {}
  for (let i = 0; i < serverDocRefs.length; i++) {
    const serverSnapShot = await getDoc(serverDocRefs[i])
    if (serverSnapShot.exists())
      serverSnapShots[serverSnapShot.id] = serverSnapShot.data()
  }
  return serverSnapShots
}

export default db
