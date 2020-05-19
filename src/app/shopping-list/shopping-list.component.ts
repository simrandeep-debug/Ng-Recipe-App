import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient('chat masala ', 5),
    new Ingredient('sambhar masala ', 10),
    new Ingredient('chane ka masala ', 3),
    new Ingredient('pav bhaji masala ', 2),

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

}
