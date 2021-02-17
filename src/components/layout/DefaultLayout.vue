<template>
  <div>
    <TheHeader/>
    <slot></slot>
    <TheFooter/>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";

@Component({
  components:{
    TheHeader,
    TheFooter
  }})
export default class DefaultLayout extends Vue {

  @Prop 
}
</script>

<style></style>
