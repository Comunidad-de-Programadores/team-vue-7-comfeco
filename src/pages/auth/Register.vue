<template lang="html">
  <div
    class="column is-offset-3-table is-offset-4-desktop is-12-mobile is-6-tablet is-4-desktop"
  >
    <h3 class="title has-text-centered">{{ $t("register-form.title") }}</h3>
    <div class="box">
      <form ref="form" @submit.prevent="onSubmit">
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
          <ValidationProvider
            rules="required"
            name="Nickname"
            v-slot="{ errors, valid }"
          >
            <b-field
              label="Nickname"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
                placeholder="Type Nickname"
                v-model="formData.nickName"
                name="Nickname"
                required
              >
              </b-input>
            </b-field>
          </ValidationProvider>
          <ValidationProvider
            rules="required|email"
            name="Email"
            v-slot="{ errors, valid }"
          >
            <b-field
              label="Email"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
                placeholder="Type E-Mail"
                name="Email"
                v-model="formData.email"
                required
              ></b-input>
            </b-field>
          </ValidationProvider>
          <ValidationProvider
            rules="required|confirmed:confirm"
            name="password"
            v-slot="{ errors, valid }"
          >
            <b-field
              :label="$t('register-form.password')"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
                placeholder="Type Password"
                name="password"
                type="password"
                v-model="formData.password"
                password-reveal
                required
              ></b-input>
            </b-field>
          </ValidationProvider>
          <ValidationProvider
            vid="confirm"
            rules="required"
            name="password_confirmation"
            v-slot="{ errors, valid }"
          >
            <b-field
              class="mb-4"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
              :label="$t('register-form.repeat-password')"
            >
              <b-input
                placeholder="Repeat Password"
                name="password_confirmation"
                type="password"
                v-model="formData.confirmPassword"
                password-reveal
                required
              ></b-input>
            </b-field>
          </ValidationProvider>
          <b-button
            type="is-primary"
            class="mb-4"
            size="is-medium"
            expanded
            @click.prevent="handleSubmit(onSubmit)"
            :loading="isLoading"
          >
            {{ $t("register-form.title") }}
          </b-button>
        </ValidationObserver>
        <p class="has-text-centered">
          {{ $t("register-form.already") }}
          <router-link class="has-text-center" :to="{ path: './login' }">
            {{ $t("register-form.already-link") }}
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { Vue, Component } from 'vue-property-decorator'
import Auth from '../../auth/auth'
import { RegisterRequest } from '@/models/AuthRequest'

@Component({
  components: { ValidationProvider, ValidationObserver }
})
export default class Register extends Vue {
  isLoading = false;
  formData = new RegisterRequest();

  success (user: RegisterRequest): void {
    this.$buefy.toast.open({
      duration: 3000,
      message: `Welcome ${user.nickName}!`,
      type: 'is-success'
    })
  }

  fail (): void {
    this.$buefy.toast.open({
      duration: 3000,
      message: 'Something was wrong trying to create a user!',
      type: 'is-danger'
    })
  }

  async onSubmit (): Promise<void> {
    try {
      this.isLoading = true
      const user = await Auth.register(this.formData)
      console.log(user)
      this.success(user)
      // Redirect to login
      this.$router.push('./login')
    } catch (e) {
      // show an error message
      console.error(e)
      this.fail()
    }
  }
}
</script>

<style>
.main {
  width: 70%;
  height: 100%;
}
.loading-icon {
  position: absolute !important;
  top: 30px !important;
  right: 50px !important;
  font-size: 8px;
}
</style>
