<template lang="HTML">
  <div>
    <h1>Remote Cretors</h1>
  </div>
</template>
<script lang="ts">
import ContentCreatorsAPI from '@/api/ContentCreators'
import { ContentCreator } from '@/models/ContentCreator'
import { RequestOptions } from '@/models/RequestOptions'
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class ContentCreatorsCarrousel extends Vue {
  pageOptions = new RequestOptions()
  creators:ContentCreator[] = []
  /**
   * Create method
   */
  created ():void {
    console.log(process.env.VUE_APP_API_TOKEN)
    this.getContentCreators()
  }

  /**
   * Get Content Creators from api
   */
  async getContentCreators (): Promise<void> {
    try {
      const remoteCreators = await ContentCreatorsAPI.get(this.pageOptions)
      this.creators = [...this.creators, ...remoteCreators]
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
<style lang="">

</style>
