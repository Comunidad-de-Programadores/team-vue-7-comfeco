import { RegisterRequest } from './AuthRequest'

export default class User extends RegisterRequest {
  id = ''
  profileImageUrl? = ''
  speciality? = null
  bio? = null
  birthDate = '';
  country?: {name:string, code:string}
  gender? = null
  socialLinks? = []
  badges?:string[] = []
  // events?: Event[] = []
}
