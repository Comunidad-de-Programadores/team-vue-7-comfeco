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
   created (): void {
     this.fetchCurrentUser()
   }

   async fetchCurrentUser (): Promise<User> {
     return new Promise((resolve, reject) => {
       firebaseAuth.onAuthStateChanged(async (user: any) => {
         if (user) {
           const userData = await Users.getUserByEmail(user.email)
           this.currentUserInfo = { ...this.currentUserInfo, ...userData }
           resolve(this.currentUserInfo)
         }
       })
     })
   }
}
