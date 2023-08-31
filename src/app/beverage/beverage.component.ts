import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css'],
})
export class BeverageComponent {
  @Input() beverage = '';
  // beverage = ['Tea', 'Coffee', 'Chai'];
}
