<template >
  <div class="columns is-flex-wrap-wrap">
    <div class="column is-12 has-text-centered py-6">
      <p class="title is-3 mb-3">Groups </p>
    </div>
    <div class="column is-12 is-3-desktop">
      <div class="box p-4">
        <p
          class="mb-0"
          v-if="userGroup==null"
        >
          No te has unido a ningún grupo
        </p>
        <div v-if="userGroup !=null">
            <p class="subtitle is-6">
              Tu grupo:
            </p>
          <p class="title is-4 mb-4">
            {{userGroup.name}}
          </p>
          <div>
            <div class="is-flex mb-4 is-justify-content-space-between is-align-items-center"
            v-for="user in groupsUsers" :key="user.id">
              <div class="is-flex is-align-items-center" >
                  <b-image

                  class="is-64x64 has-image-rounded mr-4"
                    :src=" 'https://i.pravatar.cc/128'"
                  >

                  </b-image>
                  <div>
    <p>
                    {{user.name}}
                  </p>
                      <p class="is-size-7">
                    {{user.range}}
                  </p>
                  </div>

              </div>
                                <span class="is-size-7">{{user.role}}</span>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-12 is-9-desktop is-align-content-baseline">
      <div class="is-flex mb-4 is-justify-content-space-between">
        <b-field>
          <b-select
            v-model="type"
            @input="fetchGroups()"
           placeholder="Filtrar por lenguaje">
           <option

                    v-for="option in types"
                    :value="option"
                    :key="option">
                    {{ option}}
                </option>
                <option :value="null">None</option>
          </b-select>
        </b-field>
        <form class="is-flex" @submit.prevent="fetchGroups()">

          <b-field  class="mr-4">
            <b-input
              v-model="search"
              placeholder="Search..."
              type="search"
              icon="magnify"
              icon-clickable
            >
            </b-input>
            <p class="control">
          <b-button  native-type="submit"  icon-right="magnify">
          </b-button>

            </p>
          </b-field>

        </form>

      </div>
      <div class="columns is-flex-wrap-wrap">
        <div
          v-for="(group,index) in groups"
          :key="'group'+index"
          class="column  is-12-mobile is-4-tablet is-4-desktop is-one-fifth-widescreen"
        >
          <GroupsTabCard @select="saveUserGroup($event)" :group="group" />
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import GroupsTabCard from '@/components/tabs/groups/GroupsTabCard.vue'
import GroupsAPI from '@/api/Groups'
import Group from '@/models/Group'
import User from '@/models/User'
import HasUserInfo from '@/models/HasUserInfo'
import Users from '@/api/users'
@Component({
  components: { GroupsTabCard }
})
export default class GroupsTab extends HasUserInfo {
  groups: Group[] = [];
  search = '';
  type:string|null = null
  userGroup: Group | null = null;
  types= ['javascript', 'typescript']
  groupsUsers: {
    id: string;
    name: string;
    avatar: string;
    role: string;
    range: string;
  }[] = [];

  created (): void {
    this.fetchGroups()
  }

  @Watch('currentUserInfo')
  onUserChange (val: User, oldVal: User): void {
    this.fetchUserGroup()
  }

  fetchGroups (): void {
    GroupsAPI.getGroups(this.search, this.type).then((groups) => {
      this.groups = groups
      console.log(groups)
    })
  }

  async fetchUserGroup (): Promise<void> {
    console.log(this.currentUserInfo)
    if (this.currentUserInfo.groupId) {
      this.userGroup = await GroupsAPI.getGroup(this.currentUserInfo.groupId.toString())
      console.log(this.userGroup)
      this.groupsUsers = await GroupsAPI.getUsersGroups(this.userGroup.id.toString())
    }
  }

  saveUserGroup (group:Group):void {
    console.log('uniendose a S', group)
    this.currentUserInfo.groupId = group.id
    Users.saveUser(this.currentUserInfo).then(user => {
      console.log(user)
      this.fetchUserGroup()
    })
  }

  /* searchGroups () {
    GroupsAPI.searchGroups({ name: this.search }).then(groups => {
      this.groups = groups
    })
  } */
}
</script>
<style lang="scss">
.has-image-rounded{
  img{
    border-radius: 50%;
  }
}
</style>
