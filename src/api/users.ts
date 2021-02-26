import { firebaseDB } from '@/firebase/firebaseapp'
import { User } from '@/models/User'
import firebase from 'firebase'
export class Users {
  baseRef ():firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
    return firebaseDB.collection('users')
  }

  getUserByEmail (email:string):Promise<User> {
    const query = this.baseRef().where('email', '==', email)
    return query.get().then(snapshot => {
      return snapshot.docs[0].data() as User
    })
  }
}

export default new Users()
