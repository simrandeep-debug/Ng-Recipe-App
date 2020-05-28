import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    IngredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('chat masala ', 5),
        new Ingredient('sambhar masala ', 10),
        new Ingredient('chane ka masala ', 3),
        new Ingredient('pav bhaji masala ', 2),
    
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient (ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.IngredientsChanged.emit(this.ingredients.slice());
        
        console.log("Added new Ingredient " +ingredient.name);
      }
}