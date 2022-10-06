import { Component, OnInit } from '@angular/core';
import { SharedService } from 'shared';

@Component({
  selector: 'app-test0',
  templateUrl: './test0.component.html',
  styleUrls: ['./test0.component.scss']
})
export class Test0Component implements OnInit {

  setShared(content: string) {
    this.myShared.setContent(content);

  }

  constructor(public myShared: SharedService) { }

  ngOnInit(): void {
    console.log("myservice smarty is ", this.myShared.smartyTest());
  }

}
