<template lang="HTML">
<div class="card">
    <div class="is-flex is-justify-content-space-between mt-4 ml-4">
        <h4 class="title is-4">
            Comunidades
        </h4>
          <a class="mr-5 " href="" >
            Ver más
          </a>
    </div>
    <div class="card-content has-text-centered" >
      <div class="content">
        <div class="column is-12 mb-3"  v-for="item in comunities" >
            <div class="box is-flex ">
                <figure class="image is-64x64">
                    <img src='https://bulma.io/images/placeholders/128x128.png' alt="Image" >
                </figure>
                <p class="subtitle is-4 mb-0">
                {{item.name}}
                </p>
                <a class="ml-6 mt-6" :href=item.enlace >
                    Unirme
                </a>
            </div>
            <hr>
        </div>
      </div>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class Comunities extends Vue {
      comunities = [{ name: 'Comunidad de programadores', enlace: 'https://discord.com/channels/775907616986890261/775925840289726474' }, { name: 'El lenguaje de los programadores', enlace: '' }, { name: 'Latam Dev', enlace: 'https://www.facebook.com/groups/javascriptlatam/?multi_permalinks=744383719614166' }];
}
</script>
<style lang="scss">
.comunity-icon{
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin: 0px auto;
  display: flex;
  background: rgba($color: #000000, $alpha: 0.12);
  justify-content: center;
  align-items: center;
    .icon {
        i::before{
      font-size: 72px;
    }
  }

}
</style>
