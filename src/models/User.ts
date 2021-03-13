import { RegisterRequest } from './AuthRequest'

export class User extends RegisterRequest {
  id = ''
  profileImageUrl? = ''
  speciality? = null
  bio? = null
  birthDate? = ''
  socialLinks? = []
}

export default User
