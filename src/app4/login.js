import { RemoteData, RemoteDataMatch } from './RemoteData'
import { LoginFailure, LoginFailureMatch } from './LoginFailure'

const LoginMixin = {
  components: {
    RemoteDataMatch,
    LoginFailureMatch
  },
  data: function() {
    return {
      login: RemoteData.None,
      RemoteData: RemoteData,
      LoginFailure: LoginFailure
    };
  }
};

export { LoginMixin };
