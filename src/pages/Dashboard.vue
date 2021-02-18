<template>
    <section>
        <h1>Dashboard</h1>
        <b-button type="is-primary"  @click="salir()">Salir de sesión</b-button>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firebaseApp } from '../firebase/firebaseapp'
@Component({})
export default class Login extends Vue {
  salir (): void{
    firebaseApp.auth().signOut().then(() => {
      this.$router.push('/login')
    }).catch(function (error) {
      console.error(error)
    })
  }
}
</script>
