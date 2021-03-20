import { firebaseAuth, firebaseDB } from '@/firebase/firebaseapp'
import { AuthRequest, RegisterRequest } from '@/models/AuthRequest'
import firebase from 'firebase'
export class Auth {
  /**
   * Log in a user
   * @param data
   */
  login (data: AuthRequest):Promise<any> {
    return firebaseAuth.signInWithEmailAndPassword(data.email, data.password)
  }

  /**
   * Register a user to firebase
   * @param data
   */
  register (data: RegisterRequest): Promise<RegisterRequest> {
    return firebaseAuth.createUserWithEmailAndPassword(data.email, data.password).then(async () => {
      // Un sing user
      await this.signOut()
      // save on firebase store
      return firebaseDB.collection('users').add(Object.assign({}, data)).then(() => {
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

  /**
   *
   * @returns
   */
  reaunthenticate (password:string):Promise<void> {
    const user = this.getCurrentUser()

    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    )
    return this.getCurrentUser().reauthenticateWithCredential(credentials)
  }

  /**
 * Seign out method
 */
  signOut () : Promise<void> {
    return firebaseAuth.signOut()
  }

  /**
   * OnStateChange method
   */
  onAuthChange ():any {
    return firebaseAuth.onAuthStateChanged
  }

  /**
   * Updates user password
   */
  updatePassword (password:string):Promise<void> | undefined {
    return firebaseAuth.currentUser?.updatePassword(password)
  }
}

export default new Auth()
