import { RegisterRequest } from './AuthRequest'

export class User extends RegisterRequest {
  profileImageUrl = ''
  speciality = null
  bio = null
  socialLinks = []
}

export default User
