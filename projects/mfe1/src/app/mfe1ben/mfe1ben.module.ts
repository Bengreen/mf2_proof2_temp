import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mfe1benRoutingModule } from './mfe1ben-routing.module';
import { BenViewComponent } from './ben-view/ben-view.component';


@NgModule({
  declarations: [
    BenViewComponent
  ],
  imports: [
    CommonModule,
    Mfe1benRoutingModule
  ]
})
export class Mfe1benModule { }
