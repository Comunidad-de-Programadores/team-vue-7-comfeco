<template lang="lang">
  <div>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
       <ValidationProvider rules="required|email" name="Email" v-slot="{ errors, valid }">
        <b-field
          label="Email"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input type="email" v-model="email"></b-input>
        </b-field>
      </ValidationProvider>
      <div class="buttons">
         <button class="button is-success" @click="handleSubmit(submit)">
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
          <span>Recuperar Contraseña</span>
        </button>
      </div>
    </ValidationObserver>
  </div>
</template>
<script lang="ts">
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { Vue, Component } from 'vue-property-decorator'
import Auth from '@/auth/auth.ts'
@Component({
  components: { ValidationProvider, ValidationObserver }
})
export default class ForgotPassword extends Vue {
  email = '';
  async submit () {
    try {
      await Auth.forgotPassword(this.email)
      console.log('Email send')
    } catch (error) {
      console.error(error)
    }
  }

}

</script>
<style lang="">
</style>
