<template lang="">
  <div class="box is-text-centered">
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
        <a href="#">
          <b-icon
          icon="facebook"
          size="is-medium">

          </b-icon>

        </a>
        <a href="#">
           <b-icon
          icon="twitter"
          size="is-medium">

          </b-icon>
        </a>
          <a href="#">
           <b-icon
          icon="github"
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
</script>
<style lang="scss" scoped>
 .divider{
   width:100%;
   height:1px;
   background-color:rgba(0,0,0,0.12)
 }
</style>
