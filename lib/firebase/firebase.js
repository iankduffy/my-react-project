import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC6KfHjrcyignoa8jEXL88RUJjWnoNZx-w",
  authDomain: "e-commerce-example-fc218.firebaseapp.com",
  databaseURL: "https://e-commerce-example-fc218.firebaseio.com",
  projectId: "e-commerce-example-fc218",
  storageBucket: "e-commerce-example-fc218.appspot.com",
  messagingSenderId: "587385817693",
  appId: "1:587385817693:web:4dc0c5a2b184201afddbb4",
  measurementId: "G-9DSB2WREZP"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  // console.log(snapShot)

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt, 
        ...additionalData
      })
    } catch (error) {
      console.error('error:', error.message)
    } 
  }

  return userRef

}