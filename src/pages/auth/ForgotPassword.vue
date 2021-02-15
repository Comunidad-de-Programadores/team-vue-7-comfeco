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
      </ValidationObserver>
  </div>
</template>
<script lang="ts">
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: { ValidationProvider, ValidationObserver }
})
export default class ForgotPassword extends Vue {
      email ='';
}

</script>
<style lang="">

</style>
