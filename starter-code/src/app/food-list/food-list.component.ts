import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foods: Array<any>= [];
newFoods: Object = {};


  constructor() { }


  ngOnInit() {
    this.foods = foods;
  }

//   searchMeal(input){
//     // console.log("You searched for: ", input.value)
//     this.foods.forEach(function(eachName){
//       const newArray = eachName.name.filter(function(){
//         console.log(eachName.name);
//         if (eachName.name === input.value) {
//           newArray.push(eachName);
  
//         }
//       })

      

//     });
//   }

// searchMeal(input){
//   const newArray = this.foods.filter(function(eachMeal){
//     console.log(newArray);
//     return newArray.push(eachMeal.name);
    
//   });
// }

addFood(name, calories, image){
  this.foods.push({

    name: name.value,
    calories: calories.value,
    image: image.value 
  })

}

}

