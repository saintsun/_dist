var Oidc = window.Oidc,
    UserManager = Oidc.UserManager;
    
if ((Oidc && Oidc.Log && Oidc.Log.logger)) {
    Oidc.Log.logger = console;
}
// new UserManager().signinSilentCallback();
// const settings = {
//     authority: 'https://devauth.thyteknik.com.tr',
//     client_id: 'AngularDemoLocal',
//     redirect_uri: 'http://localhost:4200/account/signin-oidc',
//     post_logout_redirect_uri: 'http://localhost:4200/account/signout-callback-oidc',
//     response_type: 'id_token token',
//     scope: 'openid profile email custom.profile ums commonapi',
//     secret_key: 'a10bae1c-f115-0d79-e909-6231952cb27c',
//     silent_redirect_uri: 'http://localhost:4200/assets/silent-renew.html',
//     automaticSilentRenew: true,
//     accessTokenExpiringNotificationTime: 4,
//     // silentRequestTimeout:10000,
//     revokeAccessTokenOnSignout: true,
//     filterProtocolClaims: true,
//     loadUserInfo: true,
//     clockSkew: 1
//   };

console.log(window.location.hash);
console.log(window.location.href);
new UserManager().signinSilentCallback().then( () => {
})
    .catch((err) => {
        console.log(err);
    });