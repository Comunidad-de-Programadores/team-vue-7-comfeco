<template lang="">
  <div class="box is-text-centered" v-if="currentUserInfo">
    <div class="is-flex is-justify-content-flex-end mb-3">
      <router-link :to="{ name:'edit-profile'}" > Editar perfil </router-link>
    </div>
    <b-image
    style="margin:0px auto;"
      class="image is-128x128 p-0 mb-4"
      :src="userAvatarImage"
      lazy
      rounded
      >
        <template #placeholder>
                <figure class="media-left">
                <p class="image is-128x128">
                    <b-skeleton circle width="128px" height="128px"></b-skeleton>
                </p>
            </figure>
            </template>
      </b-image>
      <div class="has-text-centered">

      <p class="title is-4 ">
        {{currentUserInfo.nickName}}
      </p>
      <p class="subtitle is-5">
        {{currentUserInfo.speciality?currentUserInfo.speciality:'ninguna'}}
      </p>
      <p class="mb-4">
          {{currentUserInfo.bio?currentUserInfo.bio:'no hay bio'}}
      </p>
      </div>
      <div class="divider"></div>
      <div class="pt-4 is-flex is-justify-content-space-around">
        <a  v-for="(network,index) in userLinks" target="blank" :key='index' :href="urlByNetwork(network.name)+'/'+network.url">
          <b-icon
          v-if="network!='' "
          :icon="network.name"
          size="is-medium">

          </b-icon>

        </a>

      </div>

  </div>
</template>
<script lang="ts">
import { firebaseAuth } from '@/firebase/firebaseapp'
import User from '@/models/User'
import Users from '@/api/users'

import { Component, Vue } from 'vue-property-decorator'
@Component
export default class ProfileTabOverview extends Vue {
  currentUserInfo: User | null = null;

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

  get userLinks () {
    return Object.keys(this.currentUserInfo?.socialLinks ? this.currentUserInfo?.socialLinks : {}).map((key) => {
      return {
        name: key,
        url: this.currentUserInfo?.socialLinks[key]
      }
    }
    ).filter(x => x.url !== '')
  }

  urlByNetwork (name:string):string {
    let url = ''
    switch (name) {
      case 'facebook': {
        url = 'https://www.facebook.com/'
        break
      }
      case 'twitter': {
        url = 'https://www.twitter.com/'
        break
      }
      case 'github': {
        url = 'https://github.com/'
        break
      }
      case 'linkedin': {
        url = 'https://www.linkedin.com/'
        break
      }
    }
    return url
  }
}
</script>
<style lang="scss" scoped>
 .divider{
   width:100%;
   height:1px;
   background-color:rgba(0,0,0,0.12)
 }
</style>
