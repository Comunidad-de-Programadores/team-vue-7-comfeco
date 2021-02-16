<template lang="html">
   <div class="container main">
     <b-button
        label="Launch toast "
        type="is-success"
        size="is-medium"
        @click="success" />
      <section class="section">
        <article class="message">
          <div class="message-header is-info">
            <p>Register Form</p>
          </div>
          <div class="message-body">
            <form ref="form" @submit.prevent="onSubmit">
              <b-field
                  :type="formError.username ? 'is-danger': ''"
                  :message="formError.username"
              >
                <b-input
                    placeholder="Nickname"
                    name="nickName"
                    v-model="formData.nickName"
                    required
                >
                </b-input>
              </b-field>

              <b-field
                :type="formError.email ? 'is-danger': ''"
                :message="formError.email"
              >
                <b-input
                  placeholder="E-Mail"
                  name="email"
                  v-model="formData.email"
                  required
                ></b-input>
              </b-field>

              <b-field
                :type="formError.password ? 'is-danger': ''"
                :message="formError.password"
              >
                <b-input
                  placeholder="Password"
                  name="password"
                  type="password"
                  v-model="formData.password"
                  password-reveal
                  required
                ></b-input>
              </b-field>

              <b-field
                :type="formError.password ? 'is-danger': ''"
                :message="formError.password"
              >
                <b-input
                  placeholder="Repeat Password"
                  name="password"
                  type="password"
                  v-model="formData.confirmPassword"
                  password-reveal
                  required
                ></b-input>
              </b-field>

              <button
                class="button is-success"
                @click.prevent="onSubmit"
                :disabled="isDisabled"
              >
                Register
              </button>
            </form>
          </div>
        </article>
        </section>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import Auth from '../../auth/auth'
import { RegisterRequest } from '@/models/AuthRequest.ts'
@Component
export default class Register extends Vue {
      isDisabled = false
      formData = new RegisterRequest();
      formError = {}

      success (user: RegisterRequest): void {
        this.$buefy.toast.open({
          message: `Welcome ${user.nickName}}!`,
          type: 'is-success'
        })
      }

      async onSubmit (): Promise<void> {
        try {
          const response = await Auth.register(this.formData)
          console.log(response)
          this.success(response.nickName)
          // Redirect to login
        } catch (e) {
          // show an error message
          console.error(e)
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
