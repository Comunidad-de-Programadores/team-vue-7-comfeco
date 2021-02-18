<template lang="html">
  <centered-layout>
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
                type="passwordConfirmation"
                v-model="confirmPassword"
              ></b-input>
            </b-field>
          </validation-provider>
          <b-button
            type="is-primary"
            expanded
            size="is-medium"
            @click="handleSubmit(submit)"
            :loading="isLoading"
          >
            {{ $t("reset-password.button") }}
          </b-button>
        </validation-observer>
      </div>
    </div>
  </centered-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import CenteredLayout from '@/components/layout/CenteredLayout.vue'
@Component({
  components: {
    CenteredLayout,
    ValidationObserver,
    ValidationProvider
  }
})
export default class ResetPassword extends Vue {
  isLoading = false;
  password = null
  confirmPassword = null

  submit (): void {
    console.log('submited')
  }
}
</script>
<style lang=""></style>
