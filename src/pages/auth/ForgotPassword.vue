<template>
  <default-layout>
    <div class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div
              class="column is-12-mobile is-6-table is-offset-3-table is-offset-4-desktop is-4-desktop"
            >
              <h1 class="title has-text-centered is-spaced">
               {{$t('forgot-password.title')}}
              </h1>
              <h3 class="subtitle   has-text-centered has-text-gray">
                Escribe tu email para poder recuperar tu contraseña
              </h3>
              <div class="box">
                <validation-observer ref="observer" v-slot="{ handleSubmit }">
                  <validation-provider
                    rules="required|email"
                    name="Email"
                    v-slot="{ errors, valid }"
                  >
                    <b-field
                      label="Email"
                      custom-class="is-medium"
                      class="mb-4"
                      :type="{ 'is-danger': errors[0], 'is-success': valid }"
                      :message="errors"
                    >
                      <b-input
                        placeholder="Tu email"
                        type="email"
                                              size="is-medium"
                        v-model="email"
                      ></b-input>
                    </b-field>
                  </validation-provider>
                  <div class="buttons has-text-centered">
                    <b-button
                type="is-primary"
                expanded
                size="is-medium"
                @click="handleSubmit(submit)"
                :loading="isLoading"
              >
                Recuperar Contraseña
              </b-button>
                  </div>
                </validation-observer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--div class="columns is-v-centered">
      <div class="column is-three-quarters">

      </div>
    </div>
    <div class="hero-body">

    </div-->
    </div>
  </default-layout>
</template>
<script lang="ts">
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { Vue, Component } from 'vue-property-decorator'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import Auth from '@/auth/auth.ts'
@Component({
  components: { ValidationProvider, ValidationObserver, DefaultLayout }
})
export default class ForgotPassword extends Vue {
  email = '';
  isLoading = false;
  /**
   * shows a toast with a message
   */
  showMessage (
    message:{type:string, text:string} = { type: 'is-success', text: '' }):void {
    this.$buefy.toast.open({
      duration: 3000,
      message: message.text,
      type: message.type
    })
  }

  /**
   * Submit function
   */
  async submit ():Promise<void> {
    try {
      this.isLoading = true
      await Auth.forgotPassword(this.email)
      console.log('Email send')
      this.isLoading = false
      this.email = ''
      this.showMessage(
        {
          type: 'is-success',
          text: 'Email enviando exitosamente'
        }
      )
    } catch (error) {
      this.isLoading = false
      this.showMessage(
        {
          type: 'is-danger',
          text: 'Email no pudo ser enviando'
        }
      )
      console.error(error)
    }
  }
}
</script>
<style lang=""></style>
