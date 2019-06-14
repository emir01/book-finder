import { Component, OnInit, Input } from '@angular/core';
import { Result } from './result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less']
})
export class ResultComponent {
  @Input()

  result: Result;
}
