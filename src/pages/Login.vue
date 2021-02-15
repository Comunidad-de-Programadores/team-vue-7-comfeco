<template>
    <section>
        <div style="width:40%;margin:auto;">
            <h1>Bienvenido</h1>
            <b-field label="Username">
                <b-input v-model="username"></b-input>
            </b-field>
            <b-field label="Password">
                <b-input v-model="password"></b-input>
            </b-field>
            <b-button type="is-primary">Ingresar</b-button>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Home extends Vue {
  /**
   * Create method
   */
  created () {
    console.log(this.$route.query)
  }
}
</script>
