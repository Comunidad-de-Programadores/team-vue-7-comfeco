import { required, confirmed, length, email, max } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('email', {
  ...email,
  message: 'This field must be a valid email'
})

extend('confirmed', {
  ...confirmed,
  message: 'Las contraseñas no coinciden'
})

extend('length', {
  ...length,
  message: 'This field must have 2 options'
})
extend('max', {
  ...max,
  message: 'El campo {_field_} debe tener al menos {length} caractres'
})
