<template>
  <div class="columns is-flex-wrap-wrap">
    <div class="column is-12">
      <p class="title is-4 mb-3">Insignias </p>

    </div>
          <div
        class="column is-3 is-text-center"
        v-for="(badge,index) in badgesCompleted"
        :key="badge.name+index"
      >
        <div
          :class="{'has-background-yellow' : badge.completed }"
          class="badge-icon"
        >
          <b-icon
            style="margin:0px auto;"
            :type="badge.completed ? 'is-primary':''"
            :icon="badge.icon"
            size="is-small"
          >
          </b-icon>
        </div>
      </div>
  </div>

</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BadgesMixin from '@/models/mixins/badges'
@Component({})
export default class Badges extends BadgesMixin {}
</script>
<style lang=""></style>
