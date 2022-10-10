import { AfterViewInit, Component, ElementRef, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-d3sample',
  templateUrl: './d3sample.component.html',
  styleUrls: ['./d3sample.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class D3sampleComponent implements AfterViewInit {

  constructor() { }

  data=[
    {
      "letter": "A",
      "frequency": 0.08167
    },
    {
      "letter": "B",
      "frequency": 0.01492
    },
    {
      "letter": "C",
      "frequency": 0.02782
    },
    {
      "letter": "D",
      "frequency": 0.04253
    },
    {
      "letter": "E",
      "frequency": 0.12702
    },
    {
      "letter": "F",
      "frequency": 0.02288
    },
    {
      "letter": "G",
      "frequency": 0.02015
    },
    {
      "letter": "H",
      "frequency": 0.06094
    },
    {
      "letter": "I",
      "frequency": 0.06966
    },
    {
      "letter": "J",
      "frequency": 0.00153
    },
    {
      "letter": "K",
      "frequency": 0.00772
    },
    {
      "letter": "L",
      "frequency": 0.04025
    },
    {
      "letter": "M",
      "frequency": 0.02406
    },
    {
      "letter": "N",
      "frequency": 0.06749
    },
    {
      "letter": "O",
      "frequency": 0.07507
    },
    {
      "letter": "P",
      "frequency": 0.01929
    },
    {
      "letter": "Q",
      "frequency": 0.00095
    },
    {
      "letter": "R",
      "frequency": 0.05987
    },
    {
      "letter": "S",
      "frequency": 0.06327
    },
    {
      "letter": "T",
      "frequency": 0.09056
    },
    {
      "letter": "U",
      "frequency": 0.02758
    },
    {
      "letter": "V",
      "frequency": 0.00978
    },
    {
      "letter": "W",
      "frequency": 0.0236
    },
    {
      "letter": "X",
      "frequency": 0.0015
    },
    {
      "letter": "Y",
      "frequency": 0.01974
    },
    {
      "letter": "Z",
      "frequency": 0.00074
    }
  ];


  width=700;
  height=500;

  @ViewChild('myChart', {static: true})
  chart!: ElementRef;

  @ViewChild('target') targetContainer!: ElementRef;

  get svg() { return this.targetContainer.nativeElement; }

  get margin(): {top: number, bottom: number, left: number, right: number} {
    return { top: 20, bottom: 20 , left: 40, right: 40, }
  }

  ngAfterViewInit(): void {
    // Must use this lifecycle to ensure the svg target object is available
    console.log("my chart is ", this.chart);
    this.createChart();
  }
  createChart() {
    console.log("before we look try here", this.chart)
    console.log("starting to look at this.svg", this.targetContainer);
    console.log("etter data is ", this.data);
    let x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
    let y = d3.scaleLinear().rangeRound([this.height, 0]);
    x.domain(this.data.map(d => d.letter));
    y.domain([0, d3.max(this.data, d => d.frequency) || 0]);

    let ben = d3.axisBottom(x);
    let beny = d3.axisLeft(y).ticks(10, "%");
    // throw new Error('Method not implemented.');
    d3.select(this.svg).append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + (this.height)+ ")")
      .call(ben);
    d3.select(this.svg).append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
      // .style("text-anchor", "end");

    let letters = d3.select(this.svg)
      .append("g")
      .attr("class", "letters");

    letters.selectAll(".bar")
      .data(this.data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.letter)|| null)
        .attr("y", d =>  y(d.frequency))
        .attr("width", x.bandwidth())
        .attr("height", d => this.height - y(d.frequency));

  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.updateChart();
  // }
  updateChart() {
    throw new Error('Method not implemented.');
  }

}
