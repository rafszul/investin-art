import { AuthProviders, AuthMethods } from 'angularfire2';

// Must export the config
export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};
