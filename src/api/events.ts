import { firebaseDB } from '@/firebase/firebaseapp'
import firebase from 'firebase'
import Event from '@/models/Event'
export class Events {
  baseRef ():firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
    return firebaseDB.collection('users')
  }

  saveEventsToUser (id:string, event:Event):Promise<Event> {
    const ref = this.baseRef().doc(id).collection('events')
    return new Promise<Event>((resolve, reject) => {
      ref.doc(event.id.toString()).set(event).then(() => {
        resolve(event)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  }
}
export default new Events()
