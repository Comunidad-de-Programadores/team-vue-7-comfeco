import { Vue } from 'vue-property-decorator'
import { firebaseAuth } from '@/firebase/firebaseapp'
import User from '@/models/User'
import Users from '@/api/users'

export class HasUserInfo extends Vue {
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
    firebaseAuth.onAuthStateChanged(async (user: any) => {
      console.log(user)
      if (user) {
        this.currentUserInfo = await Users.getUserByEmail(user.email)
      }
    })
  }
}
