import { RemoteData, RemoteDataMatch } from './RemoteData'
import { LoginFailure, LoginFailureMatch } from './LoginFailure'

const LoginMixin = {
  components: {
    RemoteDataMatch,
    LoginFailureMatch
  },
  data () {
    return {
      login: RemoteData.NotAsked,
      RemoteData: RemoteData,
      LoginFailure: LoginFailure
    };
  }
};

export { LoginMixin };
