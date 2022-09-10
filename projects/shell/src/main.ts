import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

var preloadToCheckModules = true;

if (preloadToCheckModules) {
  Promise.all([
    loadRemoteEntry({
      type: 'module',
      remoteEntry: environment.mfePaths.mfe1,
      // 'http://localhost:3000/remoteEntry.js',
    }),
  ])
    .catch((err) => console.error('Error loading remote entries', err))
    .then(() => import('./bootstrap'))
    .catch((err) => console.error(err));
} else {

  import('./bootstrap')
    .catch(err => console.error(err));
}
