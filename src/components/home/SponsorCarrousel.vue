<template lang="HTML">
  <div class="py-6">
    <div class="is-flex is-justify-content-space-between">
      <span class="title is-3">
Sponsors
      </span>

      <a href="" class="button is-large is-primary">
        Apoyar Inciativa
      </a>
    </div>
    <b-carousel class="px-0 mx-0"
      :autoplay="autoPlay"
    >
        <b-carousel-item class="px-0 mx-0" v-for="(carousel, i) in carousels" :key="i" :autoplay="autoplay">
          <div class="columns is-centered mx-0">
            <div v-for="(image, j) in carousel.contentCreators" :key="j" class="column is-1 px-0 py-6"  >
              <figure class="image px-4 py-4 is-128x128 has-text-centered">
                <img :src="image.image" class="is-rounded" alt="">
              </figure>
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
  autoPlay = false
  // repeat = false

   carousels = [
     {
       page: 1,
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
       },
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
       },
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
       ]
     },
     {
       page: 3,
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
       },
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
       },
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
       ]
     },
     {
       page: 5,
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
       },
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
       ]
     },
     {
       page: 6,
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
       },
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
       ]
     },
     {
       page: 7,
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
       },
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
       ]
     },
     {
       page: 8,
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
       },
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
<style lang="scss">
.is-one-egih{
  width: 12.5;
}
</style>
