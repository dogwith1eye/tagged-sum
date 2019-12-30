import { taggedSum } from 'daggy'

const LoginFailure = taggedSum('LoginFailure', {
  AccountNoMatch: [],
  AcccountLocked: [],
  PasswordNoMatch: [],
  PasswordExpired: [],
  Other: ['e']
})

const LoginFailureMatch = {
  props: ['data'],
  render() {
    return this.data.cata({
      AccountNoMatch: () => this.$scopedSlots.accountNoMatch(),
      AcccountLocked: () => this.$scopedSlots.acccountLocked(),
      PasswordNoMatch: () => this.$scopedSlots.passwordNoMatch(),
      PasswordExpired: () => this.$scopedSlots.passwordExpired(),
      Other: (e) => this.$scopedSlots.other(e)
    })
  }
}

export { LoginFailure, LoginFailureMatch }