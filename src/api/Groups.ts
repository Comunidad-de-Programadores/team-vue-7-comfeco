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

  getGroup (id:string):Promise<Group> {
    console.log(id)
    return this.getRef().doc(id).get().then(snapshot => {
      console.log(snapshot.data())
      return { ...snapshot.data() } as Group
    })
  }

  getUsers (id:string): Promise<{
    id:string,
    name:string,
    avatar:string,
    role:string,
    range:string
  }[]> {
    return this.getRef().doc(id).collection('users').get().then(snapshot => {
      return snapshot.docs.map(doc => ({ ...doc.data() } as {
        id:string,
        name:string,
        avatar:string,
        role:string,
        range:string
      }))
    })
  }

  getGroups (search = '', type:string| null):Promise<Group[]> {
    /* return axios.get('https://604961d0fb5dcc0017969e01.mockapi.io/api/groups').then(response => (response.data as Group[])) */
    const baseQuery = type !== null ? this.getRef().where('field', '==', type) : this.getRef()
    return baseQuery.get().then(snapshot => {
      const groups = snapshot.docs.map(doc => {
        return { ...doc.data() } as Group
      })
      console.log(search !== '', groups)
      if (search !== '') {
        return groups.filter((group:Group) => group.name.toLocaleLowerCase().indexOf(search) > -1)
      }
      return groups
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

  searchGroups (params:{
    name:string
  }):Promise<Group[]> {
    return axios.get('https://604961d0fb5dcc0017969e01.mockapi.io/api/groups', {
      params: params
    }).then(response => (response.data as Group[]))
  }
}

export default new GroupsAPI()
