import * as constants from '~/constants/constants'

export default ({ app }, inject) => {
  inject('constants', key => constants[key])
}