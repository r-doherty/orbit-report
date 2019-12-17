import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  rowHeadings: string[] = ["", " Space Debris", " Communication", " Probe", " Positioning", " Space Station", " Telescope"];

  @Input() satellites: Satellite[];
  @Input() displayList: AppComponent[];

  constructor() { }

  ngOnInit() {
  }

  // count(term: string): number {
  //   let typeCount = 0;
  //   for(let i=0; i < this.displayList.length; i++) {
  //      let type = this.displayList[i].type.toLowerCase();
  //      if (type.indexOf(term) >= 0) {
  //         typeCount++;
  //      }
  //   }
  //   return typeCount;
  // }

}
