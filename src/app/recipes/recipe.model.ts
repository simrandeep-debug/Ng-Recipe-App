//model is a blueprint for the obejct we create .
//How a recipe should look like 

export class Recipe{
    public name : string;
    public description : string;
    public imagePath : string ;

    constructor(name: string , desc : string, imagePath : string ){
        this.name = name ;
        this.description = desc;
        this.imagePath = imagePath

    }

}