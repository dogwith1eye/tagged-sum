<template>
  <div id="app">
    <div class="flex items-center h-screen w-full bg-blue-200">
    <div class="w-full max-w-xs mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="">
        </div>
        <div class="flex items-center justify-between">
          <button @click="onLogin" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2019 Acme Corp. All rights reserved.
      </p>
    </div>
    </div>
  </div>
</template>

<script>
import { LoginMixin } from "./login";

export default {
  name: 'app',
  mixins: [LoginMixin],
  methods: {
    onLogin () {
      this.login = this.RemoteData.Asking
    }
  }
}
</script>
