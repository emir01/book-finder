import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Result } from '../result/result.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {
  readonly numbeOfResultPerRow = 3;

  @Input()
  results: Array<Result>;

  constructor() { }

  ngOnInit() { }


}
