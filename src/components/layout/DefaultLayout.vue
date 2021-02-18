<template>
  <div>
    <TheHeader v-if="!hideNavbar"/>
    <slot></slot>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'

@Component({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class DefaultLayout extends Vue {
  @Prop({ type: Boolean, default: false }) readonly hideNavbar :boolean = false;
}
</script>

<style></style>
