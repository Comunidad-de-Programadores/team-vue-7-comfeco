<template>
  <div class="card" v-if="group">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="group.image_url"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
          <p class=""> <span class="tag is-yellow mb-4">{{group.field?group.field:'typescript' }}</span></p>
          <p class="title is-5 mb-4"> {{group.name}}</p>

      <div class="content">
        <p>{{group.description}}</p>
      </div>
      <div class="card-footer pt-5 has-text-centered">
        <a   @click="select(group)" class="button is-primary">Unirse</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import Group from '@/models/Group'
@Component
export default class GroupsTabCard extends Vue {
  @Prop() group!: Group;

  @Emit()
  select (event:any) {
    return event
  }
}
</script>
<style lang=""></style>
