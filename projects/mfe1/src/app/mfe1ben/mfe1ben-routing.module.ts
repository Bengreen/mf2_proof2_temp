import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenViewComponent } from './ben-view/ben-view.component';

const routes: Routes = [
  {
    path: '',
    component: BenViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mfe1benRoutingModule { }
