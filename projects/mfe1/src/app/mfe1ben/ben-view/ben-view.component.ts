import { Component, OnInit } from '@angular/core';
import { SharedService } from 'shared';

@Component({
  selector: 'app-ben-view',
  templateUrl: './ben-view.component.html',
  styleUrls: ['./ben-view.component.scss']
})
export class BenViewComponent implements OnInit {

  constructor(public myShared: SharedService) { }

  ngOnInit(): void {
    console.log("accessing smarty from mfe", this.myShared.smartyTest());
  }

}
