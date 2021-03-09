<template lang="HTML">
<div class="columns is-flex-wrap-wrap">
  <div class="column is-12">
    <p class="title is-4 mb-3">Insignias </p>
  </div>
      <div class="column is-text-center" v-for="item in badges" >
        <figure class="image is-128x128" style="margin: 0px auto;">
          <b-image
            :src="item.image"
            ratio="1by1"
            rounded=true
          ></b-image>
        </figure>
      </div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class Badges extends Vue {
  badges = [
    {
      image: 'https://via.placeholder.com/150'
    },
    {
      image: 'https://via.placeholder.com/150'
    },
    {
      image: 'https://via.placeholder.com/150'
    },
    {
      image: 'https://via.placeholder.com/150'
    }
  ];
}
</script>
<style lang=""></style>
