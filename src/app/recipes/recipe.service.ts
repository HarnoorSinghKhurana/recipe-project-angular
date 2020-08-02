import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipieService {
    constructor(private slService: ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Pizza', 
            'Cheese Burst Pizza', 
            'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
            [new Ingredient (
                'Cheese',
                100
            ),
            new Ingredient(
                'PizzaBase',
                120
            )],
        ),
        new Recipe(
            'Cake', 
            'Rainbow Cake', 
            'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/rainbow-cake600x600_2.jpg?ext=.jpg',
            [new Ingredient(
                'Cream', 12
            ),
            new Ingredient(
            'eggs', 6
            )]
        )
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }  

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    loadById(id: number){
        return this.recipes[id];
    }
}