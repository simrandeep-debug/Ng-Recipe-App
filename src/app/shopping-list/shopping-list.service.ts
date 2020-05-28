import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

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
      }
}