import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-google';
  baverageList: any = ['Coffee', 'Tea', 'Juice'];
  foodList: any = ['Pasta', 'Dosa', 'Bread'];

  addBeverageListItem(event: any) {
    console.log(event, 'beverage parent');
    debugger;
    this.baverageList.push(event);
  }

  addFoodListItem(event: any) {
    console.log(event, 'food ----parent');
    debugger;
    this.foodList.push(event);
    console.log(this.foodList, '----FoodList array');
  }
}
