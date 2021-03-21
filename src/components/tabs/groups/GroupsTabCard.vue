<template>
  <div class="card">
    <div class="card-header">
      <figure class="image is-4by3">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
          <p class=""> <span class="tag is-yellow mb-4">  @johnsmith</span></p>
          <p class="title is-5 mb-4">John Smith</p>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>

      </div>
      <div class="card-footer pt-5 has-text-centered">
        <a href="#" class="button is-primary">Unirse</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Group from '@/models/Group'
@Component
export default class GroupsTabCard extends Vue {
  @Prop() group: Group = new Group()
}
</script>
<style lang=""></style>
