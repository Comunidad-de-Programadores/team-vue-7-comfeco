<template>
  <div
    class="column is-offset-3-table is-offset-4-desktop is-12-mobile is-6-tablet is-4-desktop"
  >
  <h1 class="title has-text-centered">
      {{ $t("login-form.title") }}
    </h1>
    <div class="box">

      <validation-observer ref="observer" v-slot="{ handleSubmit }">
        <validation-provider
          name="Email"
          rules="required|email"
          v-slot="{ errors, valid }"
        >
          <b-field
            label="Email"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="username"></b-input>
          </b-field>
        </validation-provider>

        <validation-provider
          name="Password"
          rules="required"
          v-slot="{ errors, valid }"
        >
          <b-field
            :label="$t('password')"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="password"                 password-reveal
 type="password"></b-input>
          </b-field>
        </validation-provider>

          <p class="my-3">
            <router-link  :to="{name:'forgot-password'}">
              {{$t('login-form.forgot-password')}}
            </router-link>
          </p>

        <b-button
          :loading="loading"
        size="is-medium" @click="handleSubmit(login)" expanded type="is-primary">
         {{$t('login')}}
        </b-button>
          <p class="mt-4 has-text-centered">
            {{$t('login-form.have-account')}}
            <router-link :to="{name:'register'}">
              {{$t('here')}}
            </router-link>
          </p>
      </validation-observer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { firebaseApp } from '@/firebase/firebaseapp'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Form from '@/models/Form'

@Component({
  components: { ValidationProvider, ValidationObserver }
})
export default class Login extends Form {
  username = '';
  password = '';
  async login (): Promise<void> {
    this.loading = true
    try {
      await firebaseApp.auth().signInWithEmailAndPassword(this.username, this.password)
      this.loading = false
      this.$router.push({ name: 'dashboard' })
    } catch (e) {
      this.loading = false
      console.error(e)
    }
  }
}
</script>
