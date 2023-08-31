import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  @Output() newBeverageEvent = new EventEmitter<string>();
  @Output() newFoodEvent = new EventEmitter<string>();

  addNewBeverageItem(item: any) {
    console.log(item, '---beverage added');
    this.newBeverageEvent.emit(item);
  }

  addNewFoodItem(item: any) {
    console.log(item, '----food added');
    this.newFoodEvent.emit(item);
  }
}
