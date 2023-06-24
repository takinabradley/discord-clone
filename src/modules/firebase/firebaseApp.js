import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCOtgDpd5moTARGzEEM6Bpsd8DiBY-L_Gk",
  authDomain: "discord-clone-e0df0.firebaseapp.com",
  projectId: "discord-clone-e0df0",
  storageBucket: "discord-clone-e0df0.appspot.com",
  messagingSenderId: "98076180450",
  appId: "1:98076180450:web:446e6c92dafd9b0c0503bb"
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export default app
