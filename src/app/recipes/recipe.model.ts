//model is a blueprint for the obejct we create .
//How a recipe should look like 

import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    public name : string;
    public description : string;
    public imagePath : string ;
    public ingredients : Ingredient[];

    constructor(name: string , desc : string, imagePath : string, ingredients : Ingredient[] ){
        this.name = name ;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;

    }

}