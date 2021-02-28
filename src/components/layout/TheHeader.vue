<template lang="html">
  <b-navbar :fixed-top="true" centered spaced>
    <template #brand>
      <b-navbar-item
        class="is-size-4 has-text-link has-text-weight-bold"
        tag="router-link"
        :to="{ path: '/' }"
      >
        Eventer
      </b-navbar-item>
    </template>
    <template v-slot:start>
  <b-navbar-item
    href=""
    tag="a"
    active
  >
    Home
  </b-navbar-item>
  <b-navbar-item tag="a">
    Comunidades
  </b-navbar-item>
  <b-navbar-item tag="a">
    Talleres
  </b-navbar-item>
  <b-navbar-item tag="a">
    Creadores de Contenido
  </b-navbar-item>
</template>
    <template #end>
  <div
    class="is-flex"
    v-if="currentUserInfo!=null"
  >
    <b-dropdown>
      <template #trigger>
        <div class="is-flex is-align-items-center">
          <figure class="image is-48x48 mr-4">
            <img
              class="is-rounded"
              :src="userAvatarImage"
              alt=""
            />
          </figure>
          <p>{{currentUserInfo.nickName }}</p>
        </div>
      </template>
      <b-dropdown-item aria-role="listitem">

        <router-link :to="{name:'Profile'}" class="media">

          <b-icon class="media-left" icon="account"></b-icon>
          <div class="media-content">
            <h3>My Profile</h3>
          </div>
        </router-link>
      </b-dropdown-item>
      <hr
        class="dropdown-divider"
        aria-role="menuitem"
      >
      <b-dropdown-item aria-role="listitem">
        <span @click="logOut()">Log out </span>
      </b-dropdown-item>
    </b-dropdown>

    <b-navbar-dropdown :label="'Lang: ' + $i18n.locale.toLocaleUpperCase()">
      <b-navbar-item @click="$i18n.locale = 'es'">
        Español
      </b-navbar-item>
      <b-navbar-item
        href="#"
        @click="$i18n.locale = 'en'"
      >
        English
      </b-navbar-item>
    </b-navbar-dropdown>
  </div>

  <div
    class="buttons"
    v-if="!currentUserInfo"
  >
    <router-link
      class="button is-primary"
      :to="{ name: 'login' }"
    >
      <strong>{{ $t("login") }} </strong>
    </router-link>

    <router-link
      class="button"
      :to="{ name: 'register' }"
    >
      <strong>{{ $t("register") }} </strong>
    </router-link>
    <div
      class="is-divider-vertical"
      data-content=""
    ></div>
    <b-navbar-dropdown :label="'Lang: ' + $i18n.locale.toLocaleUpperCase()">
      <b-navbar-item @click="$i18n.locale = 'es'">
        Español
      </b-navbar-item>
      <b-navbar-item
        href="#"
        @click="$i18n.locale = 'en'"
      >
        English
      </b-navbar-item>
    </b-navbar-dropdown>
  </div>
</template>
  </b-navbar>
</template>
<script lang="ts">
import { firebaseAuth } from '@/firebase/firebaseapp'
import { Vue, Component } from 'vue-property-decorator'
import Auth from '../../auth/auth'
import Users from '@/api/users.ts'
import User from '@/models/User.ts'
@Component
export default class TheHeader extends Vue {
  currentUserInfo: User | null = null;

  get currentUser (): any {
    return Auth.getCurrentUser()
  }

  get currentRoute (): string | null | undefined {
    return this.$route.name
  }

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

  logOut (): void {
    Auth.signOut()
      .then(() => {
        this.$router.push({ name: 'login' }, () => {
          console.log('leaving')
        })
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}
</script>
<style lang="scss"></style>
