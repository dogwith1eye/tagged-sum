<template>
  <div id="app">
    <div class="flex items-center h-screen w-full bg-blue-200 diagonal-lines">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 max-w-xs mx-auto">
        <SignalLight v-if="stopping" color="bg-red-700" />
        <SignalLight v-else-if="warning" color="bg-orange-500" />
        <SignalLight v-else-if="passing" color="bg-green-700" />
        <SignalLight v-else color="bg-gray-200" />
        <form class="my-4 flex-wrap" @submit.prevent>
          <div class="flex flex-col mb-4">
            <button
              @click="onStop"
              class="btn btn-blue uppercase">
              Stop
            </button>
          </div>
          <div class="flex flex-col mb-4">
            <button
              @click="onWarn"
              class="btn btn-blue uppercase">
              Warn
            </button>
          </div>
          <div class="flex flex-col mb-4">
            <button
              @click="onPass"
              class="btn btn-blue uppercase">
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

export default {
  name: 'app',
  components: {
    SignalLight
  },
  data() {
    return {
      stopping: false,
      warning: false,
      passing: false,
    }
  },
  methods: {
    onStop() {
      this.stopping = true
      this.warning = false
      this.passing = false
    },
    onWarn() {
      this.stopping = false
      this.warning = true
      this.passing = false
    },
    onPass() {
      this.stopping = false
      this.warning = false
      this.passing = true
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

