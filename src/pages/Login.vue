<template>
    <div class="column is-offset-3-table is-offset-4-desktop is-12-mobile is-6-tablet is-4-desktop">
      <b-field label="Username">
            <b-input v-model="username"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input v-model="password" type="password"></b-input>
        </b-field>
        <div>
          <button type="button" class="btn__ingresar" @click="login()">Ingresar</button>
        </div>
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firebaseApp } from '../firebase/firebaseapp'

@Component({})
export default class Login extends Vue {
  username = '';
  password = '';

  login (): void{
    firebaseApp.auth().signInWithEmailAndPassword(this.username, this.password).then(() => {
      this.$router.push({ name: 'dashboard' })
    })
  }
}
</script>
