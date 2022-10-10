import { Component, OnInit } from '@angular/core';
import crossfilter from 'crossfilter2';
import {Crossfilter} from 'crossfilter2';

import data from './44wf-4yxs.json';

@Component({
  selector: 'app-crossfilter',
  templateUrl: './crossfilter.component.html',
  styleUrls: ['./crossfilter.component.scss']
})
export class CrossfilterComponent implements OnInit {

  mycf: Crossfilter<any>;

  constructor() {
    console.log("my data is ", data);
    this.mycf= crossfilter(data);

    console.log("size is = ", this.mycf.size());
    let countyDimension = this.mycf.dimension(item => item.county);
    let countyGroups = countyDimension.group();

    console.log("groups = ", countyGroups.size() , countyGroups.all());

  }

  ngOnInit(): void {
  }

}
