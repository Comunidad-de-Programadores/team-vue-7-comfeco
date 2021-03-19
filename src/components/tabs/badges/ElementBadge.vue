<template lang="HTML">
<div class="card">
  <div class="card-image has-text-centered mt-5">
    <div class="badge-icon">
   <b-icon  style="margin:0px auto;"
   :type="badge.completed == true ? 'is-primary':''"
                :icon="badge.icon"
                size="is-small">
            </b-icon>
    </div>

  </div>
    <div class="card-content has-text-centered" v-if="badge">
      <p class="title is-3 mb-4 ">{{badge.name}} </p>
      <p class="title is-5 mb-3 ">Descripcion </p>
      <div class="content">
          <span>
              {{badge.description}}
          </span>

        <br >
        <hr>
        <p class="title is-5 mb-3 ">¿Como ganarla? </p>
         <span>
               {{badge.howgetit}}
          </span>
      </div>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Badge } from '@/models/Badge'
@Component({})
export default class ElementBadge extends Vue {
  @Prop() badge!: Badge;
}
</script>
<style lang="scss">
.badge-icon{
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
