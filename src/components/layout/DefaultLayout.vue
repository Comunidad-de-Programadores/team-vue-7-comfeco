<template>
  <div>
    <TheHeader/>
    <slot></slot>
    <SecondaryCarousel/>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { Vue, Component ,Prop } from "vue-property-decorator";
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
import SecondaryCarousel from "./SecondaryCarousel.vue";

@Component({
  components:{
    TheHeader,
    TheFooter,
    SecondaryCarousel
  }})
export default class DefaultLayout extends Vue {

  @Prop({type:Boolean,default:false}) readonly hideNavbar :Boolean = false;
}
</script>

<style></style>
