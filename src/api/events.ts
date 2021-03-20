import { firebaseDB } from '@/firebase/firebaseapp'
import firebase from 'firebase'
import Event from '@/models/Event'
export class Events {
  baseRef ():firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
    return firebaseDB.collection('users')
  }

  saveEventsToUser (id:string, events:Event[]):void {
    const ref = this.baseRef().doc(id).collection('events')
    for (const event in events) {
      console.log(event)
      //
      // add event to collection
      // const newEvent = firebaseDB.ref.set(event)
      // console.log('newEvent', newEvent)
      // return newEvent
    }
  }
}
