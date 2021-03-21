import http from '@/config/http'
import { firebaseDB } from '@/firebase/firebaseapp'
import Group from '@/models/Group'
import axios from 'axios'

export class GroupsAPI {
  getRef () {
    return firebaseDB.collection('groups')
  }

  addGroup (group:Group, users:any[]) :Promise<any> {
    const docRef = this.getRef().doc(group.id.toString())
    return docRef.set(group).then(response => {
      users.forEach((user) => {
        docRef.collection('users').add({ ...user })
      })
      return group
    })
  }

  getGroups ():Promise<Group[]> {
    /* return axios.get('https://604961d0fb5dcc0017969e01.mockapi.io/api/groups').then(response => (response.data as Group[])) */
    return this.getRef().get().then(snapshot=>{
      let groups = []
      snapshot.docs.map(doc=>{
        return {doc.}
      })
      return  groups
    })
  }

  getUsersGroups (grouId:string): Promise<{
    id:string,
    name:string,
    avatar:string,
    role:string,
    range:string
  }[]> {
    return axios.get('https://604961d0fb5dcc0017969e01.mockapi.io/api/groups/' + grouId + '/users').then(response => (response.data as {
      id:string,
      name:string,
      avatar:string,
      role:string,
      range:string
    }[]))
  }
}

export default new GroupsAPI()
