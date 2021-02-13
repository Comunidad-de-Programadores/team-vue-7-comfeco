<template lang="html">
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Index extends Vue {
  /**
   *
   * @param list
   */
  orderList (list: List[]): Promise<boolean> {

  }
}
</script>
<style lang="">

</style>
