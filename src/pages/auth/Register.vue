<template lang="html">
   <div class="container main">
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
                    name="nickname"
                    v-model="formData.nickname"
                    @focus="clearInputs"
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
                  @focus="clearInputs"
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
                  @focus="clearInputs"
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
                  v-model="formData.password2"
                  @focus="clearInputs"
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
// import { firebaseAuth, firebaseApp } from '@/firebase/firebaseapp.ts'

import { Vue, Component } from 'vue-property-decorator'
// import Auth from '@/auth/auth.ts'
@Component
export default class Register extends Vue {
  // data () {
  // return {
      isDisabled = true
      formData: {
        nickname: '';
        email: 'aaa';
        password: 'aaa';
        password2: 'aaa';
      }

      formError: {
        username: '';
        email: '';
        password: '';
      }

  // }
  // }
  // onSubmit (): void {
  //   this.formData.nickname
  //   this.isDisabled = true
  //   this.formError.username = ''
  //   this.formError.email = ''
  //   this.formError.password = ''
  // }

  // createUser (): void {
  //   Auth().createUserWithEmailAndPassword(this.formData.email, this.formData.password).then(res => {
  //     console.log(res)
  //   })
  //     .catch(err : Error => {
  //       console.log(err)
  //     })
  // }
}
//   methods: {
//     createUser () {
//       firebase.auth().createUserWithEmailAndPassword(this.formData.email, this.formData.password).then(res => {
//         console.log(res)
//       })
//         .catch(err => {
//           console.log(err)
//         })
//     },
//     onSubmit () {
//       createUser()
//       if (this.isDisabled) return
//       this.isDisabled = true
//       this.isLoading = true
//       this.formError.username = ''
//       this.formError.email = ''
//       this.formError.password = ''
//       this.registerUser(this.formData)
//     },
//     clearInputs (e) {
//       if (e.target && e.target.nodeName === 'INPUT') {
//         e.target.className = 'input'
//         this.formError[e.target.name] = ''
//       }
//     },
//     showErrors (errors) {
//       if (errors && typeof errors === 'object') {
//         errors.forEach(({ path, message }) => {
//           this.formError[path] = message
//         })
//       }
//     }
//   }
// }

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
