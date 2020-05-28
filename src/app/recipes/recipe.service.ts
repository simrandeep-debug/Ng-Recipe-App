import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] = [
        new Recipe(' Mc Aloo Tikki ', 
        ' Recipe for Mc Aloo Tikki Burger ', 
        'https://i.ytimg.com/vi/q7Idojp5ZY8/maxresdefault.jpg',
        [
            new Ingredient ('Aloo Tikki', 1),
            new Ingredient ('Buns', 2),
            new Ingredient ('Salad', 6),
            new Ingredient ('Sauce', 1)
        ]
        ),
    
        new Recipe(' French Fries ',
         ' Recipe for French Fries ', 
        'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Fries-Small-Medium.jpg?$Product_Desktop$',
        [
            new Ingredient ('French Fries', 14),
            new Ingredient('Sauce', 2),
            new Ingredient('Seasoning', 5)
        ]
        ),
    
    
        new Recipe(' KFC Chicken Dips ', 
        ' Recipe for KFC Chicken Dips ', 
        'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Fries-Small-Medium.jpg?$Product_Desktop$',
        [
            new Ingredient('Chicken', 100),
            new Ingredient('Spices', 4),
            new Ingredient('Sauce', 3)
        ]
        ),
    
    
      ];

      getRecipes(){
          return this.recipes.slice();
      }


}