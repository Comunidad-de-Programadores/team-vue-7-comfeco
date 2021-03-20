<template>
  <div class="container is-max-desktop">
    <div class="button-back">
      <router-link :to="{ name: 'Profile' }">
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
          v-if="currentUserInfo"
        >
          <div class="columns is-flex-wrap-wrap">
            <div class="column is-mobile is-half-desktop">
              <validation-provider
                rules="required"
                name="nick"
                v-slot="{ errors, valid }"
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
              <validation-provider
                rules="required|email"
                v-slot="{ errors }"
              >
                <b-field
                  label="Correo"
                  :type="{ 'is-danger': errors[0] }"
                  :message="errors"
                >
                  <b-input
                    type="email"
                    v-model="currentUserInfo.email"
                  ></b-input>
                </b-field>
              </validation-provider>
            </div>
            <!--GENDERS-->
            <div class="column is-mobile is-one-third-desktop">
              <b-field label="Genero">
                <b-select
                  v-model="currentUserInfo.gender"
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
              <b-field
                label="Select a date"
                grouped
              >
                <b-datepicker
                  locale="es-ES"
                  v-model="birthDate"
                  :mobile-native="false"
                >
                  <template v-slot:trigger>
                    <b-button
                      icon-left="calendar-today"
                      type="is-primary"
                    />
                  </template>
                </b-datepicker>
                <b-input
                  expanded
                  readonly
                  :value="userBirthDate"
                />
              </b-field>
            </div>
            <!-- COUNTRY-->
            <div class="column is-mobile is-one-third-desktop">
              <b-field label="País">
                <b-autocomplete
                  v-model="countryName"
                  open-on-focus
                  placeholder="e.g. Anne"
                  @select="setCountry($event)"
                  :data="filteredCountries"
                  field="name"
                  clearable
                >
                </b-autocomplete>
              </b-field>
            </div>
            <div class="column is-12">
              <b-field label="Area de conocimiento">
                <b-select
                  expanded
                  v-model="currentUserInfo.speciality"
                >
                  <option
                    v-for="area in areas"
                    :value="area"
                    :key="area"
                  >
                    {{ area }}
                  </option>
                </b-select>
              </b-field>
            </div>
            <div class="column is-mobile is-half-desktop">
              <validation-provider rules="confirmed:repeatPassword"  vid="password" v-slot="{errors}">
                <b-field
                  label="Contraseña"
                  :type="{'is-danger':errors[0]}"
                  :message="errors[0]"
                >
                  <b-input
                    type="password"
                    v-model="password"
                    password-reveal
                  ></b-input>
                </b-field>
              </validation-provider>

            </div>
            <div class="column is-mobile is-half-desktop">
            <validation-provider rules="confirmed:password"  vid="repeatPassword" v-slot="{errors}">
                <b-field
                  label="Repetir Contraseña"
                  :type="{'is-danger':errors[0]}"
                  :message="errors[0]"
                >
                  <b-input
                    type="password"
                    v-model="repeatPassword"
                    password-reveal
                  ></b-input>
                </b-field>
              </validation-provider>
            </div>
            <!--SOCILAL LINKS  -->
            <div
              class="column is-mobile is-half-desktop"
              v-for="network in socialNetworks"
              :key="network.id"
            >
              <div class="is-flex is-align-items-center">
                <p
                  for=""
                  class="is-flex label mr-4 mb-0"
                >
                  <b-icon
                    :icon="network.icon"
                    size="is-small"
                  ></b-icon>
                  {{ network.url + "/" }}
                </p>
                <b-input
                  v-model="currentUserInfo.socialLinks[network.name.toLowerCase()]"
                  type="text"
                  style="width:100%"
                > </b-input>
              </div>
            </div>

            <!-- BIO -->
            <div class="column is-12">
              <validation-provider
                rules="max:140"
                v-slot="{ errors }"
              >
                <b-field
                  label="Biografía"
                  :ty="{ 'is-danger': errors[0] }"
                  :message="errors"
                >
                  <b-input
                    v-model="currentUserInfo.bio"
                    type="textarea"
                    maxlength="140"
                  >
                  </b-input>
                </b-field>
              </validation-provider>
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
import HasUserInfo from '@/models/HasUserInfo'
import { Component, Watch } from 'vue-property-decorator'
import { AREAS, SOCIAL_NETWORKS } from '@/config/fields'
import users from '@/api/users'
import User from '@/models/User'
import Auth from '@/auth/auth'
import countriesJSON from '@/api/countries.json'
@Component({
  components: { ValidationProvider, ValidationObserver }
})
export default class EditProfilePage extends HasUserInfo {
  saving = false;
  countryName = '';
  birthDate = new Date();
  password = '';
  repeatPassword = '';
  socialNetworks = SOCIAL_NETWORKS;
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

  get filteredCountries (): { name: string; code: string }[] {
    return countriesJSON.filter((country) => {
      return (
        country.name
          .toString()
          .toLowerCase()
          .indexOf(this.countryName.toLowerCase()) >= 0
      )
    })
  }

  get userBirthDate (): string {
    return this.birthDate ? this.birthDate.toDateString() : ''
  }

  get areas (): string[] {
    return AREAS
  }

  setBirthDate (date: Date): void {
    console.log(date)
  }

  setCountry (country: { name: string; code: string }): void {
    this.currentUserInfo.country = country
  }

  @Watch('currentUserInfo')
  onUserChange (val: User, oldVal: User): void {
    this.birthDate = val.birthDate ? new Date(val.birthDate) : new Date()
    this.countryName = val.country ? val.country.name : ''
  }

  async onSubmit (): Promise<void> {
    this.saving = true
    if (this.repeatPassword !== '' && this.password !== '') {
      // if password was touched ask user to repeat old password in order to update
      this.showUserDilaog()
      // await Auth.updatePassword(this.password)
      return
    }
    // update user data
    this.updateUser()
  }

  showUserDilaog (): void {
    this.$buefy.dialog.prompt({
      message: 'Escribe tu password anterior',
      inputAttrs: {
        placeholder: '',
        type: 'password'
      },
      trapFocus: true,
      onConfirm: async (oldPassword) => {
        console.log(oldPassword)
        this.saving = true
        // reautenticate iser
        Auth.reaunthenticate(oldPassword)
          .then(async (response) => {
            console.log(response)
            // update password
            await Auth.updatePassword(this.password)
            // upser user data
            this.updateUser()
          })
          .catch((e) => {
            this.saving = false
            this.$buefy.toast.open({
              message: 'La contraseña no pudo ser actualizada',
              type: 'is-danger'
            })
            console.error(e)
          })
      }
    })
  }

  async updateUser (): Promise<void> {
    try {
      console.log(this.currentUserInfo)

      this.currentUserInfo.birthDate = this.userBirthDate
      this.currentUserInfo = await users.saveUser(this.currentUserInfo)
      this.$buefy.toast.open({
        message: 'Usuario actualizado',
        type: 'is-success'
      })
      this.saving = false
    } catch (e) {
      this.saving = false
      this.$buefy.toast.open({
        message: 'Usuario no pudo ser actualizado',
        type: 'is-danger'
      })
      console.error(e)
    }
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
