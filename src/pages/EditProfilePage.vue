<template lang="html">
  <div class="section">
    <h4 class="title is-4 has-text-centered">Edit Profile page</h4>
    <div>
      <b-image
        style="margin:0px auto;"
        class="image is-128x128 p-0 mb-4"
        :src="userAvatarImage"
        lazy
        rounded
      >
        <template #placeholder>
          <figure class="media-left">
            <p class="image is-128x128">
              <b-skeleton circle width="128px" height="128px"></b-skeleton>
            </p>
          </figure>
        </template>
      </b-image>
    </div>
  </div>
</template>
<script lang="ts">
import { HasUserInfo } from '@/models/HasUserInfo'
import { Component } from 'vue-property-decorator'
@Component
export default class EditProfilePage extends HasUserInfo {
  created (): void {
    super.created()
  }
}
</script>
<style lang=""></style>
