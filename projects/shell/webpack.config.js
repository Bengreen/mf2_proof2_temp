const { shareAll, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');


let useShareAll=false;

module.exports = withModuleFederationPlugin({

  remotes: {
    // "mfe1": "http://localhost:3000/remoteEntry.js",
  },

  shared: useShareAll ? {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }
  : share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  }),
  sharedMappings: [
    'shared'
  ]
});
