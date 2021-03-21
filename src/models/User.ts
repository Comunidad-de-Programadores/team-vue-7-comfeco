import { RegisterRequest } from './AuthRequest'

export default class User extends RegisterRequest {
  id = ''
  profileImageUrl? = ''
  speciality? = null
  bio? = null
  birthDate = '';
  groupId = null
  country?: {name:string, code:string}
  gender? = null
  socialLinks: {
    [key: string]:string
  } = {
    facebook: '',
    twitter: '',
    github: '',
    linkedin: ''
  }

  badges:string[] = []
  // events?: Event[] = []
}
