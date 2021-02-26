<template lang="html">
  <b-navbar :fixed-top="true">
    <template #brand>
      <b-navbar-item
        class="is-size-4 has-text-link has-text-weight-bold"
        tag="router-link"
        :to="{ path: '/' }"
      >
        Eventer
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons" v-if="currentUser">
          <b-button @click="logOut()">
            {{$t('logout')}}
          </b-button>
           <b-navbar-dropdown
            :label="'Lang: ' + $i18n.locale.toLocaleUpperCase()"
          >
            <b-navbar-item @click="$i18n.locale = 'es'">
              Español
            </b-navbar-item>
            <b-navbar-item href="#" @click="$i18n.locale = 'en'">
              English
            </b-navbar-item>
          </b-navbar-dropdown>
        </div>
        <div class="buttons" v-if="!currentUser">
          <router-link class="button is-primary" :to="{ name: 'login' }">
            <strong>{{$t('login')}} </strong>
          </router-link>

          <router-link class="button" :to="{ name: 'register' }">
            <strong>{{$t('register')}} </strong>
          </router-link>
          <div class="is-divider-vertical" data-content=""></div>
 <b-navbar-dropdown
            :label="'Lang: ' + $i18n.locale.toLocaleUpperCase()"
          >
            <b-navbar-item @click="$i18n.locale = 'es'">
              Español
            </b-navbar-item>
            <b-navbar-item href="#" @click="$i18n.locale = 'en'">
              English
            </b-navbar-item>
          </b-navbar-dropdown>

        </div>
      </b-navbar-item >
    </template>
  </b-navbar>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Auth from '../../auth/auth'
@Component
export default class TheHeader extends Vue {
  get currentUser (): any {
    return Auth.getCurrentUser()
  }

  @Watch('currentUser')
  onCurrentUserChange (value:any, oldValue:any):void {
    console.log(value, oldValue)
  }

  logOut (): void {
    Auth.signOut()
      .then(() => {
        this.$router.push({ name: 'login' }, () => { console.log('leaving') })
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}
</script>
<style lang="scss"></style>
