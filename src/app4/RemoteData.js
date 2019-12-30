import { taggedSum } from 'daggy'

const RemoteData = taggedSum('RemoteData', {
  NotAsked: [],
  Asking: [],
  Failure: ['e'],
  Success: ['a'],
})

const RemoteDataMatch = {
  props: ['data'],
  render() {
    return this.data.cata({
      NotAsked: () => this.$scopedSlots.notAsked(),
      Asking: () => this.$scopedSlots.asking(),
      Failure: e => this.$scopedSlots.failure(e),
      Success: a => this.$scopedSlots.success(a)
    })
  }
}

export { RemoteData, RemoteDataMatch }