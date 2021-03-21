import { firebaseDB } from '@/firebase/firebaseapp'
import User from '@/models/User'
import firebase from 'firebase'
export class Users {
  baseRef ():firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
    return firebaseDB.collection('users')
  }

  getUserByEmail (email:string):Promise<User> {
    const query = this.baseRef().where('email', '==', email)
    return new Promise((resolve, reject) => {
      query.get().then(snapshot => {
        resolve({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as User)
      }).catch(error => {
        console.error(error)
      })
    })
  }

  saveUser (user:User): Promise<User> {
    const ref = this.baseRef().doc(user.id)
    return ref.set(user).then(() => {
      return { ...user } as User
    })
  }
}

export default new Users()
