import { firebaseAuth } from '@/firebase/firebaseapp'

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
  register (data: AuthRequest) {
    console.log(data)
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
