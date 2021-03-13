<template lang="HTML">
<div class="card">
  <div class="card-image has-text-centered mt-5">
    <figure class="image is-128x128 is-inline-block">
      <b-image
            src="https://bulma.io/images/placeholders/128x128.png"
            ratio="1by1"
            rounded=true
          ></b-image>
    </figure>
  </div>
    <div class="card-content has-text-centered">
      <p class="title is-3 mb-4 ">Sociable </p>
      <p class="title is-5 mb-3 ">Descripcion </p>
      <div class="content">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
          </span>

        <br >
        <hr>
        <p class="title is-5 mb-3 ">¿Como ganarla? </p>
         <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
          </span>
      </div>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ElementBadge extends Vue {

}
</script>
<style lang=""></style>
