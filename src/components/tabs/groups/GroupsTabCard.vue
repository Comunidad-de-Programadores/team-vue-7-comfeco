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
      <div class="media">
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>

      </div>
      <div class="card-footer">
        <a href="#" class="card-footer-item">Unirse</a>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class GroupsTabCard extends Vue {}
</script>
<style lang=""></style>
