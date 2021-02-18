<template lang="html">
    <div
      class="column is-offset-3-table is-offset-4-desktop is-12-mobile is-6-tablet is-4-desktop"
    >
      <h1 class="title has-text-centered">
        {{ $t("reset-password.title") }}
      </h1>
      <div class="box">
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
          <validation-provider
            rules="required"
            name="password"
            v-slot="{ errors, valid }"
          >
            <b-field
              label="New Passsword"
              class="mb-4"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
                :placeholder="$t('reset-password.placeholder')"
                type="password"
                v-model="password"
              ></b-input>
            </b-field>
          </validation-provider>

               <validation-provider
            rules="required|confirmed:password"
            name="passwordConfirmation"
            v-slot="{ errors, valid }"
          >
            <b-field
              label="Passsword Confirmation"
              class="mb-4"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
              name="confirmPassword"
                type="password"
                v-model="confirmPassword"
              ></b-input>
            </b-field>
          </validation-provider>
          <b-button
            type="is-primary"
            expanded
            size="is-medium"
            @click="handleSubmit(submit)"
            :loading="loading"
          >
            {{ $t("reset-password.button") }}
          </b-button>
        </validation-observer>
      </div>
    </div>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Auth from '../../auth/auth'
import Form from '@/models/Form.ts'
@Component({
  components: {
    ValidationObserver,
    ValidationProvider
  }
})
export default class ResetPassword extends Form {
  // variables
  password = ''
  confirmPassword = ''
  actionCode = ''
  /**
   * Create method
   */
  created (): void {
    // Get action code
    this.actionCode = this.$route.query.oobCode ? this.$route.query.oobCode.toString() : ''
  }

  /**
   * Submit action
   */
  async submit (): Promise<void> {
    try {
      this.loading = true
      // reset password with action code
      await Auth.resetPasssword(this.actionCode, this.password)
      this.loading = false
      this.showMessage({
        type: 'is-success',
        text: this.$t('reset-password.success-message').toString()
      })
      this.password = ''
      this.confirmPassword = ''
      setTimeout(() => {
        this.$router.push({ name: 'login' })
      }, 3000)
    } catch (e) {
      this.loading = false
      this.showMessage({
        type: 'is-danger',
        text: this.$t('reset-password.error-message').toString()
      })
      console.error(e)
    }
  }
}
</script>
<style lang=""></style>
