import { firebaseAuth, DB } from '@/firebase/firebaseapp'
import { AuthRequest, RegisterRequest } from '@/models/AuthRequest'

export class Auth {
  /**
   * Log in a user
   * @param data
   */
  login (data: AuthRequest):void {
    console.log(data)
  }

  /**
   * Register a user to firebase
   * @param data
   */
  register (data: RegisterRequest): Promise<RegisterRequest> {
    return firebaseAuth.createUserWithEmailAndPassword(data.email, data.password).then(() => {
      // save on firebase store
      return DB.collection('users').add(Object.assign({}, data)).then(() => {
        return data
      })
    })

    // register to firebase auth
  }

  /**
   * Sen email to reset password
   * @param data
   */
  forgotPassword (email: string): Promise<void> {
    return firebaseAuth.sendPasswordResetEmail(email)
  }

  /**
 * Resets a firebase user password
 * @param code action code from firebase
 * @param newPassword new password
 */
  resetPasssword (code:string, newPassword:string): Promise<void> {
    return firebaseAuth.confirmPasswordReset(code, newPassword)
  }

  /**
   * Returns curren user
   */
  getCurrentUser (): any {
    return firebaseAuth.currentUser
  }
}

export default new Auth()
