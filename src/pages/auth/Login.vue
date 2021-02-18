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
            <b-input v-model="password" type="password"></b-input>
          </b-field>
        </validation-provider>

          <p class="my-3">
            <router-link  :to="{name:'forgot-password'}">
              {{$t('login-form.forgot-password')}}
            </router-link>
          </p>

        <b-button size="is-medium" @click="handleSubmit(login)" expanded type="is-primary">
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
import { Component, Vue } from 'vue-property-decorator'
import { firebaseApp } from '@/firebase/firebaseapp'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

@Component({
  components: { ValidationProvider, ValidationObserver }
})
export default class Login extends Vue {
  username = '';
  password = '';
  login (): void {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.username, this.password)
      .then(() => {
        this.$router.push({ name: 'dashboard' })
      })
  }
}
</script>
