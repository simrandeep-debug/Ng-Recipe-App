import { Ingredient } from '../shared/ingredient.model';
import { Subject} from 'rxjs';


export class ShoppingListService {

    IngredientsChanged = new Subject<Ingredient[]>();

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
        this.IngredientsChanged.next(this.ingredients.slice());
        console.log("Added new Ingredient " +ingredient.name);
      }


      addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.IngredientsChanged.next(this.ingredients.slice());
      }
}