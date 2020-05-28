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
        'data:image/jpeg;base64,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',
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