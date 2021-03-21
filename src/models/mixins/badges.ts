import { BADGES } from '@/config/fields'
import Component from 'vue-class-component'
import HasUserInfo from '../HasUserInfo'

@Component
export default class Badges extends HasUserInfo {
  get badgesCompleted (): any[] {
    return BADGES.map(badge => {
      badge.completed = this.currentUserInfo.badges ? this.currentUserInfo.badges.includes(badge.name) : false
      return badge
    })
  }
}
