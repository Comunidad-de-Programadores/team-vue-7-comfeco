<template >
  <div class="columns is-flex-wrap-wrap">
    <div class="column is-12 has-text-centered py-6">
          <p class="title is-3 mb-3">Groups </p>
    </div>
    <div class="column is-3">
      <div class="box p-4">

      </div>
    </div>
    <div class="column is-9">
      <div class="is-flex is-justify-content-space-between">
          <b-field >
            <b-select placeholder="Filtrar por lenguaje">

            </b-select>
          </b-field>
           <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable

                >
            </b-input>
        </b-field>
      </div>
      <div class="columns">
        <div class="column is-one-fifth">
          <GroupsTabCard/>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import GroupsTabCard from '@/components/tabs/groups/GroupsTabCard'
@Component({
  components: { GroupsTabCard }
})
export default class GroupsTab extends Vue {

}
</script>
<style lang="scss">

</style>
