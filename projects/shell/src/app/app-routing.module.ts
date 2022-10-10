import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Test0Component } from './test0/test0.component';
import { environment } from '../environments/environment';
import { D3sampleComponent } from './d3sample/d3sample.component';
import { CrossfilterComponent } from './crossfilter/crossfilter.component';
// '~shell/src/app/environments/environment';
  // environments/environment';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'test0',
        component: Test0Component,
      },
      {
        path: 'd3',
        component: D3sampleComponent,
      },
      {
        path: 'crossfilter',
        component: CrossfilterComponent,
      },
      {
        path: 'mfe1',
        loadChildren: () =>
            loadRemoteModule({
               type: 'module',
               remoteEntry: environment.mfePaths.mfe1,
              //  'http://localhost:3000/remoteEntry.js',
              // type: 'manifest',
              // remoteName: 'mfe1',
               exposedModule: './Module'
           })
           .then(m => m.Mfe1benModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
