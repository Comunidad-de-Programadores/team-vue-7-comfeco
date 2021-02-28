<template>
  <div class="dashboard">
    <p class="title">
      Dashboard
    </p>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { firebaseApp } from '../firebase/firebaseapp'
import DefaultLayout from '../components/layout/DefaultLayout.vue'
@Component({
  components: {
    DefaultLayout
  }
})
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

<style lang="scss" scoped>
  .dashboard{
    padding: 1rem;
    min-height: 100vh;
    padding-top: 3.5rem;
  }
</style>
