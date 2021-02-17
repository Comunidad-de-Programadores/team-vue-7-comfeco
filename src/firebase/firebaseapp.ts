import firebaseconfig from '@/config/firebaseconfig'
import firebase from 'firebase'

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseconfig)
export const firebaseAuth = firebaseApp.auth()

export default firebaseApp
