<template lang="html">
  <centered-layout>
      <router-view></router-view>
  </centered-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CenteredLayout from '@/components/layout/CenteredLayout.vue'
@Component({
  components: { CenteredLayout }
})
export default class Index extends Vue {

}
</script>
<style lang="">

</style>
