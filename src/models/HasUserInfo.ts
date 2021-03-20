import { Component, Vue } from 'vue-property-decorator'
import { firebaseAuth } from '@/firebase/firebaseapp'
import User from '@/models/User'
import Users from '@/api/users'

@Component
export default class HasUserInfo extends Vue {
   currentUserInfo = new User();

   get userAvatarImage (): string {
     return this.currentUserInfo
       ? `https://ui-avatars.com/api/?name=${this.currentUserInfo.nickName}`
       : ''
   }

   /**
   * Create method
   */
<<<<<<< HEAD
  created (): void {
    firebaseAuth.onAuthStateChanged(async (user: any) => {
      console.log(user)
      if (user) {
        this.currentUserInfo = await Users.getUserByEmail(user.email)
        console.log(this.currentUserInfo)
      }
      console.log()
    })
  }
=======
   created (): void {
     firebaseAuth.onAuthStateChanged(async (user: any) => {
       console.log('Method created0', user)
       if (user) {
         this.currentUserInfo = await Users.getUserByEmail(user.email)
       }
     })
   }
>>>>>>> feature/events-saved
}
