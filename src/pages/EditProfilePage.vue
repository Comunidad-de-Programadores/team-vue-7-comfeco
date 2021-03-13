<template lang="html">
<div class="container is-max-desktop">
    <div class="button-back">
        <router-link  :to="{name:'Profile'}">
          <b-icon icon="arrow-left"></b-icon>
        </router-link>
    </div>
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
      <form action="">
      <div class="columns is-flex-wrap-wrap">
        <div class="column is-mobile is-half-desktop">
          <b-field label="Nick" >
            <b-input></b-input>
          </b-field>
        </div>
        <div class="column is-mobile is-half-desktop">
          <b-field label="Correo" >
            <b-input type="email"></b-input>
          </b-field>
        </div>
          <!--GENDERS-->
          <div class="column is-mobile is-one-third-desktop">
            <b-field label="Genero">
              <b-select placeholder="Seleciona un genero" expanded>
                  <option
                      v-for="option in genders"
                      :value="option.id"
                      :key="option.id">
                      {{ option.name }}
                  </option>
              </b-select>
          </b-field>
        </div>
          <!--BIRTH DATE-->
          <div class="column is-mobile is-one-third-desktop">
            <b-field label="Feach de nacimiento">
                <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus>
                </b-datepicker>
            </b-field>
          </div>
          <!-- COUNTRY-->
          <div class="column is-mobile is-one-third-desktop">
            <b-field label="País">
              <b-input
              type="text">

              </b-input>
            </b-field>
          </div>
          <div class="column is-12">
            <b-field label="Area de conocimiento">
              <b-select expanded>

              </b-select>
            </b-field>
          </div>
          <div class="column is-mobile is-half-desktop">
            <b-field label="Contraseña">
              <b-input type="password"></b-input>
            </b-field>
          </div>
          <div class="column is-mobile is-half-desktop">
            <b-field label="Repetir Contraseña">
              <b-input type="password"></b-input>
            </b-field>
          </div>
                    <!--facebook  -->
           <div class="column is-mobile is-half-desktop">
            <div class="is-flex is-align-items-center">
              <p for="" class="is-flex label mr-4 mb-0">
                <b-icon icon="facebook" size="is-small"></b-icon>
                facebook.com/
              </p>
               <b-input type="text" style="width:100%">

               </b-input>
            </div>
          </div>
            <div class="column is-mobile is-half-desktop">
              <div class="is-flex is-align-items-center">
                <p for="" class="is-flex label mr-4 mb-0">
                  <b-icon icon="github" size="is-small"></b-icon>
                  github.com/
                </p>
                <b-input type="text" style="width:100%">

                </b-input>
              </div>
            </div>
            <div class="column is-mobile is-half-desktop">
              <div class="is-flex is-align-items-center">
                <p for="" class="is-flex label mr-4 mb-0">
                  <b-icon icon="linkedin" size="is-small"></b-icon>
                  likendin.com/
                </p>
                <b-input type="text" style="width:100%">

                </b-input>
              </div>
            </div>
               <div class="column is-mobile is-half-desktop">
              <div class="is-flex is-align-items-center">
                <p for="" class="is-flex label mr-4 mb-0">
                  <b-icon icon="twitter" size="is-small"></b-icon>
                  twitter.com/
                </p>
                <b-input type="text" style="width:100%">

                </b-input>
              </div>
            </div>
            <div class="column is-12">
              <b-field label="Biografía">
                <b-input type="textarea" maxlength="100">

                </b-input>
              </b-field>
            </div>
      </div>
      <div class="is-flex is-justify-content-flex-end">
        <b-button type="is-primary">
          Guardar cambios
        </b-button>
      </div>
    </form>
  </div>
</div>

</template>
<script lang="ts">
import { HasUserInfo } from '@/models/HasUserInfo'
import { Component } from 'vue-property-decorator'
@Component
export default class EditProfilePage extends HasUserInfo {
  genders = [
    {
      name: 'Masculino',
      id: 'm'
    },
    {
      id: 'f',
      name: 'Femenino'
    },
    {
      id: 'o',
      name: 'Otro'
    }
  ];

  created (): void {
    super.created()
  }
}
</script>
<style scoped lang="scss">
.select select {
  width: 100%;
}

.button-back{
  position: sticky;
  top: 0;
  left: 0;
}
</style>
