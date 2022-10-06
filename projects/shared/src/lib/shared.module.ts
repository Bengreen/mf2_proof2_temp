import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { SharedService } from './shared.service';



@NgModule({
  declarations: [
    SharedComponent,
  ],
  imports: [
  ],
  exports: [
    SharedComponent,
  ],
  providers: [
    SharedService,
  ]
})
export class SharedModule { }
