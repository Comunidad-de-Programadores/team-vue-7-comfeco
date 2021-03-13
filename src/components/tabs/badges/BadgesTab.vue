<template lang="">
  <div class="columns pt-6">
    <div class="column is-4 pt-0" >
       <ElementBadge />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ElementBadge from './ElementBadge.vue'
@Component({
  components: {
    ElementBadge
  }
})
export default class BadgesTab extends Vue {}
</script>
<style lang=""></style>
