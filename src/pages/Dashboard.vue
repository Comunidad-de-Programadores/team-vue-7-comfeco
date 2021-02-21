<template>
    <section>
        <h1>Dashboard</h1>
        <h1>jhjjhjkh</h1>
        <SecondaryCarousel/>
        <b-button type="is-primary"  @click="salir()">Salir de sesión</b-button>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firebaseApp } from '../firebase/firebaseapp'
import SecondaryCarousel from './components/layout/SecondaryCarousel.vue';

@Component({
    SecondaryCarousel,
})
export default class Login extends Vue {
    salir (): void{
      let vm = this;
      firebaseApp.auth().signOut().then(function () {
          vm.$router.push("/login");
      })
      .catch(function (error) {
      });
  }
}
</script>
