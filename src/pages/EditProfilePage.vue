<template>
  <div class="container is-max-desktop">
    <div class="button-back">
      <router-link :to="{name:'Profile'}">
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
                <b-skeleton
                  circle
                  width="128px"
                  height="128px"
                ></b-skeleton>
              </p>
            </figure>
          </template>
        </b-image>
      </div>
      <ValidationObserver v-slot="{ invalid }">
        <form
          @submit.prevent="onSubmit"
          v-if="currentUserInfo!=null"
        >
          <div class="columns is-flex-wrap-wrap">
            <div class="column is-mobile is-half-desktop">
              <validation-provider
                rules="required"
                name="nick"
                v-slot="{errors,valid}"
              >
                <b-field
                  :type="{ 'is-danger': errors[0], '': valid }"
                  :message="errors"
                  label="Nick"
                >
                  <b-input
                    v-model="currentUserInfo.nickName"
                    name="nick"
                    required
                  >
                  </b-input>

                </b-field>
              </validation-provider>
            </div>
            <div class="column is-mobile is-half-desktop">
              <validation-provider rules="required|email" v-slot='{ errors}'>
                <b-field
                  label="Correo"
                  :type="{'is-danger':errors[0] }"
                  :message="errors"
                >
                  <b-input type="email" v-model="currentUserInfo.email"></b-input>
                </b-field>
              </validation-provider>

            </div>
            <!--GENDERS-->
            <div class="column is-mobile is-one-third-desktop">
              <b-field label="Genero">
                <b-select
                  placeholder="Seleciona un genero"
                  expanded
                >
                  <option
                    v-for="option in genders"
                    :value="option.id"
                    :key="option.id"
                  >
                    {{ option.name }}
                  </option>
                </b-select>
              </b-field>
            </div>
            <!--BIRTH DATE-->
            <div class="column is-mobile is-one-third-desktop">
              <b-field label="Feach de nacimiento">
                <b-datepicker
                  placeholder="Click to select..."
                  icon="calendar-today"
                  trap-focus
                >
                </b-datepicker>
              </b-field>
            </div>
            <!-- COUNTRY-->
            <div class="column is-mobile is-one-third-desktop">
              <b-field label="País">
                <b-input type="text">

                </b-input>
              </b-field>
            </div>
            <div class="column is-12">
              <b-field label="Area de conocimiento">
                <b-select expanded>
                  <option
                    v-for="area in areas"
                    :value="area"
                    :key="area"
                  >
                    {{area}}
                  </option>
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
            <!--SOCILAL LINKS  -->
            <div class="column is-mobile is-half-desktop">
              <div class="is-flex is-align-items-center">
                <p
                  for=""
                  class="is-flex label mr-4 mb-0"
                >
                  <b-icon
                    icon="facebook"
                    size="is-small"
                  ></b-icon>
                  facebook.com/
                </p>
                <b-input
                  type="text"
                  style="width:100%"
                >

                </b-input>
              </div>
            </div>
            <div class="column is-mobile is-half-desktop">
              <div class="is-flex is-align-items-center">
                <p
                  for=""
                  class="is-flex label mr-4 mb-0"
                >
                  <b-icon
                    icon="github"
                    size="is-small"
                  ></b-icon>
                  github.com/
                </p>
                <b-input
                  type="text"
                  style="width:100%"
                >

                </b-input>
              </div>
            </div>
            <div class="column is-mobile is-half-desktop">
              <div class="is-flex is-align-items-center">
                <p
                  for=""
                  class="is-flex label mr-4 mb-0"
                >
                  <b-icon
                    icon="linkedin"
                    size="is-small"
                  ></b-icon>
                  likendin.com/
                </p>
                <b-input
                  type="text"
                  style="width:100%"
                >

                </b-input>
              </div>
            </div>
            <div class="column is-mobile is-half-desktop">
              <div class="is-flex is-align-items-center">
                <p
                  for=""
                  class="is-flex label mr-4 mb-0"
                >
                  <b-icon
                    icon="twitter"
                    size="is-small"
                  ></b-icon>
                  twitter.com/
                </p>
                <b-input
                  type="text"
                  style="width:100%"
                >

                </b-input>
              </div>
            </div>
            <!-- BIO -->
            <div class="column is-12">
              <b-field label="Biografía">
                <b-input
                  type="textarea"
                  maxlength="100"
                >

                </b-input>
              </b-field>
            </div>
          </div>
          <div class="is-flex is-justify-content-flex-end">
            <b-button
              native-type="submit"
              :loading="saving"
              :disabled="invalid"
              type="is-primary"
            >
              Guardar cambios
            </b-button>
          </div>
        </form>
      </ValidationObserver>

    </div>
  </div>

</template>
<script lang="ts">
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { HasUserInfo } from '@/models/HasUserInfo'
import { Component } from 'vue-property-decorator'
import { AREAS } from '@/config/fields'
import users from '@/api/users'
@Component({
  components: { ValidationProvider, ValidationObserver }
})
export default class EditProfilePage extends HasUserInfo {
  saving = false
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

  get areas (): string[] {
    return AREAS
  }

  created (): void {
    super.created()
  }

  async onSubmit (): Promise<void> {
    this.saving = true
    try {
      this.currentUserInfo = await users.saveUser(this.currentUserInfo)
      this.saving = false
    } catch (e) {
      this.saving = false
      console.error(e)
    }
    console.log('submited')
  }
}
</script>
<style scoped lang="scss">
.select select {
  width: 100%;
}

.button-back {
  position: sticky;
  top: 0;
  left: 0;
}
</style>
