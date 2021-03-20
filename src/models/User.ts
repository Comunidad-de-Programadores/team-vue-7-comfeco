import { RegisterRequest } from './AuthRequest'

export class User extends RegisterRequest {
  id = ''
  profileImageUrl? = ''
  speciality? = null
  bio? = null
  birthDate? = ''
  country? = ''
  gender? = null
  socialLinks? = []
  badges?:string[] = []
  // events?: Event[] = []
}

export default User
