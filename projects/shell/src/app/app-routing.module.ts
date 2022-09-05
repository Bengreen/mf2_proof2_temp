import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Test0Component } from './test0/test0.component';

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
        path: 'mfe1',
        loadChildren: () =>
            loadRemoteModule({
               type: 'module',
               remoteEntry: 'http://localhost:3000/remoteEntry.js',
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
