import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[];

  // ingredients : Ingredient[] = [
  //   new Ingredient('chat masala ', 5),
  //   new Ingredient('sambhar masala ', 10),
  //   new Ingredient('chane ka masala ', 3),
  //   new Ingredient('pav bhaji masala ', 2),

  // ];

  constructor( private shoppingListService : ShoppingListService) { 
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  

}
