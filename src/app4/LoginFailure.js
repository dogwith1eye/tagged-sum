import { taggedSum } from 'daggy'

const LoginFailure = taggedSum('LoginFailure', {
  AccountNoMatch: [],
  AcccountLocked: [],
  PasswordNoMatch: [],
  PasswordExpired: []
})

const LoginFailureMatch = {
  props: ['data'],
  render() {
    return this.data.cata({
      AccountNoMatch: () => this.$scopedSlots.accountNoMatch(),
      AcccountLocked: () => this.$scopedSlots.acccountLocked(),
      PasswordNoMatch: () => this.$scopedSlots.passwordNoMatch(),
      PasswordExpired: () => this.$scopedSlots.passwordExpired()
    })
  }
}

export { LoginFailure, LoginFailureMatch }