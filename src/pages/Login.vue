<style lang="scss">
  .container__login{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
    .container__login > div{
      min-width: 15em;
      width: 30%;
      border: 1px solid rgb(183, 183, 183);
      padding:1.5em;
    }

    .title__login{
      font-size: 2em;
      color: #21458d;
      font-weight: bold;
    }

  .btn__ingresar{
    background: #4b92fc !important;
    border-color: #4b92fc !important;
    height: 45px;
    font-weight: 500 !important;
    font-size: 18px !important;
    letter-spacing: 1px;
    text-decoration: none;
    padding: 9px 10px;
    font-weight: 600;
    font-size: 1em;
    color: #ffffff;
    background-color: #0026e6;
    border-radius: 6px;
    width: 100%;
    border: 2px solid #0016b0;
  }
</style>

<template>
    <div class="container__login">
      <div>
        <h1 class="title__login">Iniciar Sesión</h1>
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
