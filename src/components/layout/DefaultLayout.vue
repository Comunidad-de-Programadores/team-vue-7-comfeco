<template>
  <div>
    <TheHeader v-if="!hideNavbar"/>
    <slot></slot>

  <div class="flex flex-col min-h-screen justify-center">
    <Timer deadline="05/20/2020" />
  </div>

    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import clock from '../Clock.vue'

@Component({
  components: {
    TheHeader,
    TheFooter,
    clock
  }
})
export default class DefaultLayout extends Vue {
  @Prop({ type: Boolean, default: false }) readonly hideNavbar :boolean = false;
}
</script>

<style></style>
