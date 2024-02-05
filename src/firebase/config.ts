import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
}

//init firebase
const app = initializeApp(firebaseConfig)

const projectFirestore = getDatabase(app)
const timestamp = serverTimestamp

export { projectFirestore, timestamp }
