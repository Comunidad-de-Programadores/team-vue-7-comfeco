import { firebaseDB } from '@/firebase/firebaseapp'
import firebase from 'firebase'
import Event from '@/models/Event'
export class Events {
  baseRef ():firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
    return firebaseDB.collection('users')
  }

  getEventsForUser (userId:string):Promise<Event[]> {
    const ref = this.baseRef().doc(userId).collection('events')
    return ref.get().then((snapshot) => {
      return snapshot.docs.map(doc => {
        return { ...doc.data() } as Event
      })
    })
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

  delete (userID:string, eventId:string) {
    return this.baseRef().doc(userID).collection('events').doc(eventId).delete()
  }
}
export default new Events()
