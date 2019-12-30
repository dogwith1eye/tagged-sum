<template>
  <div id="app">
    <div class="flex items-center h-screen w-full bg-blue-200 diagonal-lines">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 max-w-xs mx-auto">
        <SignalMatch :data="signal">
          <template #none>
            <SignalLight color="bg-gray-200" />
          </template>
          <template #stopping>
            <SignalLight color="bg-red-700" />
          </template>
          <template #warning>
            <SignalLight color="bg-orange-500" />
          </template>
          <template #passing>
            <SignalLight color="bg-green-700" />
          </template>
        </SignalMatch>
        <form class="my-4 flex-wrap" @submit.prevent>
          <div class="flex flex-col mb-4">
            <button
              :disabled="Signal.Stopping.is(signal)"
              @click="onStop"
              class="btn btn-blue uppercase"
            >
              Stop
            </button>
          </div>
          <div class="flex flex-col mb-4">
            <button
              :disabled="Signal.Warning.is(signal)"
              @click="onWarn"
              class="btn btn-blue uppercase"
            >
              Warn
            </button>
          </div>
          <div class="flex flex-col mb-4">
            <button
              :disabled="Signal.Passing.is(signal)"
              @click="onPass"
              class="btn btn-blue uppercase"
            >
              Pass
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SignalLight from '../components/SignalLight.vue'
import { SignalMixin } from "./signal";

export default {
  name: 'app',
  components: {
    SignalLight
  },
  mixins: [SignalMixin],
  methods: {
    onStop() {
      this.signal = this.Signal.Stopping
    },
    onWarn() {
      this.signal = this.Signal.Warning
    },
    onPass() {
      this.signal = this.Signal.Passing
    }
  }
}
</script>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.btn-blue:disabled {
  @apply opacity-50 cursor-not-allowed;
}
.diagonal-lines {
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")
}
</style>

