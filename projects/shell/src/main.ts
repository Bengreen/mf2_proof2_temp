import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

var preloadToCheckModules = true;

var ben = Object.keys(environment.mfePaths).map( k => {
  console.log("My key is ", k);
  return k;
});
console.log("ben = ", ben);

var ben3 = ['aaa', 'bbbb'];

var [bena, benb] = ben3;
console.log("bena and benb", bena, benb);

var ben2 = Object.entries(environment.mfePaths).map(([k, v]) => {
  // const [k, v] = myval;
  console.log("My key is ", k);
  return v;
});
console.log("ben2 = ", ben2);





if (preloadToCheckModules) {
  Promise.all(
    Object.entries(environment.mfePaths).map(([k, v]) => {
      console.log(`Preloading ${k} from ${v}`);
      return loadRemoteEntry({
        type: 'module',
        remoteEntry: v,
      })
    })
  //   [
  //   loadRemoteEntry({
  //     type: 'module',
  //     remoteEntry: environment.mfePaths.mfe1,
  //     // 'http://localhost:3000/remoteEntry.js',
  //   }),
  // ]
  )
    .catch((err) => console.error('Error loading remote entries', err))
    .then(() => import('./bootstrap'))
    .catch((err) => console.error(err));
} else {

  import('./bootstrap')
    .catch(err => console.error(err));
}
