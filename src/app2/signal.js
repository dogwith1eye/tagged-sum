import { taggedSum } from 'daggy'

const Signal = taggedSum('Signal', {
  None: [],
  Stopping: [],
  Warning: [],
  Passing: []
})

const SignalMatch = {
  props: ['data'],
  render () {
    return this.data.cata({
      None: () => this.$scopedSlots.none(),
      Stopping: () => this.$scopedSlots.stopping(),
      Warning: () => this.$scopedSlots.warning(),
      Passing: () => this.$scopedSlots.passing()
    })
  }
}

export { Signal, SignalMatch }
