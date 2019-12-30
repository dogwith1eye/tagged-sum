<template>
  <div id="app">
    <div class="flex items-center h-screen w-full bg-blue-200 diagonal-lines">
    <div class="w-full max-w-xs mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input v-model="userName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="">
        </div>
        <div class="flex items-center justify-between">
          <RemoteDataMatch :data="login">
            <template #notAsked>
              <button @click="onLogin" class="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
              </button>
            </template>
            <template #asking>
              <button @click="onLogin" class="w-32 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" type="button">
                <font-awesome-icon icon="spinner" :spin="true" size="lg" />
              </button>
            </template>
            <template #success="data">
              <p class="text-green-500 text-xs italic">{{data}}</p>
            </template>
            <template #failure="error">
              <LoginFailureMatch :data="error">
                <template #accountNoMatch>
                  <div>
                    <button @click="onLogin" class="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Try Again
                    </button>
                    <p class="text-red-500 text-xs italic">Account does not exist</p>
                  </div>
                </template>
                <template #acccountLocked>
                  <div>
                    <button @click="onLogin" class="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Try Again
                    </button>
                    <p class="text-red-500 text-xs italic">Account is locked</p>
                  </div>
                </template>
                <template #passwordNoMatch>
                  <div>
                    <button @click="onLogin" class="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Try Again
                    </button>
                    <p class="text-red-500 text-xs italic">Password does not match</p>
                  </div>
                </template>
                <template #passwordExpired>
                  <div>
                    <button @click="onLogin" class="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Try Again
                    </button>
                    <p class="text-red-500 text-xs italic">Password has expired</p>
                  </div>
                </template>
                <template #other="other">
                  <div>
                    <button @click="onLogin" class="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Try Again
                    </button>
                    <p class="text-red-500 text-xs italic">{{other}}</p>
                  </div>
                </template>
              </LoginFailureMatch>
            </template>
          </RemoteDataMatch>
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
import _ from 'lodash'

export default {
  name: 'app',
  mixins: [LoginMixin],
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    async onLogin () {
      this.login = this.RemoteData.Asking
      const response = await this.tryLogin()
      if (response.status === '200') {
        this.login = this.RemoteData.Success(response.data)
      } else if (response.status === '400') {
        this.login = this.RemoteData.Failure(this.LoginFailure.AccountNoMatch)
      } else if (response.status === '401') {
        this.login = this.RemoteData.Failure(this.LoginFailure.AcccountLocked)
      } else if (response.status === '402') {
        this.login = this.RemoteData.Failure(this.LoginFailure.AcccountLocked)
      } else if (response.status === '403') {
        this.login = this.RemoteData.Failure(this.LoginFailure.AcccountLocked)
      } else {
        this.login = this.RemoteData.Failure(this.LoginFailure.Other("Unknown status code"))
      }
    },
    async tryLogin () {
      const sleep = () => new Promise(resolve => setTimeout(resolve, 1000))
      await sleep()
      return _.sample(
        [ { status: '200', data: 'token' }
        , { status: '400', data: ''}
        , { status: '401', data: ''}
        , { status: '402', data: ''}
        , { status: '403', data: ''}
        , { status: '', data: ''},
        ]
      )
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
