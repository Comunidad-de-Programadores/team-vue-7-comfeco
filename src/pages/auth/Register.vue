<template lang="html">
   <div class="columns is-centered">
     <div class="column is-two-fifths has-text-centered">
      <section class="section">
        <article class="message is-info">
          <div class="message-header ">
            <p>Register Form</p>
          </div>
          <div class="message-body">
            <form ref="form" @submit.prevent="onSubmit">
              <!-- <ValidationProvider rules="length:2" name="NickName" v-slot="{ errors, valid }"> -->
                <b-field>
                  <b-input
                      placeholder="Nickname"
                      v-model="formData.nickName"
                      required
                  >
                  </b-input>
                </b-field>
              <!-- </ValidationProvider> -->
              <b-field>
                <b-input
                  placeholder="E-Mail"
                  name="email"
                  v-model="formData.email"
                  required
                ></b-input>
              </b-field>

              <b-field>
                <b-input
                  placeholder="Password"
                  name="password"
                  type="password"
                  v-model="formData.password"
                  password-reveal
                  required
                ></b-input>
              </b-field>

              <b-field>
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
                class="button is-success"
                @click.prevent="onSubmit"
                :loading="isLoading"
              >
                Register
              </b-button>
            </form>
          </div>
        </article>
      </section>
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
      isLoading = false
      formData = new RegisterRequest();
      // formError = {
      //   nickName: '',
      //   email: this.formData.email,
      //   password: this.formData.password <= 8,
      //   confirmPassword: 'Password does not match '
      // }

      success (user: RegisterRequest): void {
        this.$buefy.toast.open({
          duration: 3000,
          message: `Welcome ${user.nickName}!`,
          type: 'is-success',
          size: 'is-medium'
        })
      }

      fail (user: RegisterRequest): void {
        this.$buefy.toast.open({
          duration: 3000,
          message: 'Something was wrong trying to create a user!',
          type: 'is-danger',
          size: 'is-medium'
        })
      }

<<<<<<< HEAD
      async onSubmit (): Promise<void> {
=======
      async onSubmit ():Promise<void> {
>>>>>>> origin/dev
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
