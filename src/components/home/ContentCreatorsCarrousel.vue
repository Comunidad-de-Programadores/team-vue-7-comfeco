<template lang="HTML">
  <div>
    <h1>Remote Cretors</h1>
    <b-carousel :interval="3000">
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <div class="columns p-4">
            <div v-for="(image, j) in carousel.contentCreators" :key="j" class="column is-3  "  >
              <div class="box p-0">
                <img :src="image.image" alt="" style="width:100%">
                  <p class="title pb-4 is-4">
                    {{image.name }}
                  </p>
              </div>
            </div>
          </div>
        </b-carousel-item>
    </b-carousel>
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

   carousels = [
     {
       page: 1,
       contentCreators: [{
         name: 'Lorem',
         image: 'https://via.placeholder.com/150'
       },
       {
         name: 'Lorem',

         image: 'https://via.placeholder.com/150'
       },
       {
         name: 'Lorem',

         image: 'https://via.placeholder.com/150'
       },

       {
         name: 'Lorem',

         image: 'https://via.placeholder.com/150'
       }
       ]
     },
     {
       page: 2,
       contentCreators: [{
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
       ]
     },
     {
       page: 4,
       contentCreators: [{
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
       ]
     }

   ];

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
<style lang=""></style>
