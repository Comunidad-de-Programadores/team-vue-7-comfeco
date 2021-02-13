import { firebaseAuth } from "@/firebase/firebaseapp";


export class Auth {

  /**
   * Log in a user
   * @param data 
   */
  login(data:AuthRequest){

  }
   /**
   * Register a user to firebase
   * @param data 
   */
  register(data:AuthRequest){

  }
  /**
   * Sen email to reset password
   * @param data 
   */
  forgotPassword(data:AuthRequest){
    
  }
  /**
   * Reset user password
   * @param data 
   */
  resetPasssword(data:AuthRequest){

  }

  /**
   * Returns curren user
   */
  getCurrentUser(){
    firebaseAuth.currentUser
  }
}