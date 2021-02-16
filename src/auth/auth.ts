import { firebaseAuth, DB } from '@/firebase/firebaseapp'
import { AuthRequest, RegisterRequest } from '@/models/AuthRequest'

export class Auth {
  /**
   * Log in a user
   * @param data
   */
  login (data: AuthRequest) {
    console.log(data)
  }

  /**
   * Register a user to firebase
   * @param data
   */
  register (data: RegisterRequest): Promise<RegisterRequest> {
    return firebaseAuth.createUserWithEmailAndPassword(data.email, data.password).then(() => {
      // save on firebase store
      return DB.collection('users').doc(data).then(() => {
        
      })
    })

    // register to firebase auth
  }

  /**
   * Sen email to reset password
   * @param data
   */
  forgotPassword (data: AuthRequest) {
    console.log(data)
  }

  /**
   * Reset user password
   * @param data
   */
  resetPasssword (data: AuthRequest) {
    console.log(data)
  }

  /**
   * Returns curren user
   */
  getCurrentUser () {
    return firebaseAuth.currentUser
  }
}

export default new Auth()
