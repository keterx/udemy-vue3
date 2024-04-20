import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('password_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `This field ${ctx.field} is required`,
          min: `The field ${ctx.field} must be at least {min} characters`,
          max: `The field ${ctx.field} must be at most {length} characters`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetic characters and spaces`,
          email: `The field ${ctx.field} must be a valid email`,
          min_value: `This field  ${ctx.field} is too low`,
          max_value: `This field ${ctx.field} is too high`,
          confirmed: 'The confirmation does not match',
          excluded: 'This field contains an excluded value',
          country_excluded: 'We do not accept users from this location',
          password_mismatch: 'THe passwords do not match',
          tos: 'You must accept the terms of service'
        }

        return messages[ctx.rule.name]
          .replace('{length}', ctx.rule.params[0])
          .replace('{min}', ctx.rule.params[0])
          .replace('{max}', ctx.rule.params[0])
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
