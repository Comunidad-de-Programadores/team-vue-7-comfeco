<template lang="html">
  <div class="hero is-fullheight-with-navbar">
    <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
              <div class="column is-12-mobile  is-6-tablet is-4-desktop ">
                  <h3 class="title has-text-centered">Register Form</h3>
                  <div class="box">
<form ref="form" @submit.prevent="onSubmit">
              <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
              <ValidationProvider rules="required" name="Nickname" v-slot="{ errors, valid }">
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
              <ValidationProvider rules="required|email" name="Email" v-slot="{ errors, valid }">
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
              <ValidationProvider rules="required" name="Email" v-slot="{ errors, valid }">
              <b-field
              label="Password"
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
              <b-field
              label="Repeat Password">
                <b-input
                  placeholder="Repeat Password"
                  name="password"
                  type="password"
                  v-model="formData.confirmPassword"
                  password-reveal
                  required
                ></b-input>
              </b-field>

              <b-button
                type="is-primary"
                class="mb-4"
                size="is-medium"
                expanded
                @click.prevent="handleSubmit(onSubmit)"
                :loading="isLoading"
              >
                Register
              </b-button>
              </ValidationObserver>
              <p>Already register?
      <router-link :to="{ path: './login' }">
        Sign In
      </router-link>
    </p>
            </form>
                  </div>
              </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script lang="ts">
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { Vue, Component } from 'vue-property-decorator'
import Auth from '../../auth/auth'
import { RegisterRequest } from '@/models/AuthRequest.ts'
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

  fail (user: RegisterRequest): void {
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
      const user = await Auth.register(this.formData)
      console.error(e)
      this.fail(user)
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
