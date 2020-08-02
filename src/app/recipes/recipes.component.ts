import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import { RecipieService } from './recipe.service';
import { ThrowStmt } from '@angular/compiler';
import { TitleTagService } from '../object-graph/service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipieService]
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;
  constructor(private recipeService: RecipieService,
    private titleTagService: TitleTagService) { }

  ngOnInit(): void {
    this.titleTagService.setTitle('List of Recipes');
    this.titleTagService.setSocialMediaTags(
      'http://localhost:4200/recipes', 
      'List of Recipes',
      'Recipes added will be displayed here',
      'https://i2.wp.com/www.foodandwinegazette.com/wp-content/uploads/2019/02/1-Cookbook19.jpg?w=1200&ssl=1');

    this.recipeService.recipeSelected
      .subscribe(
        (recipe : Recipe) => {
          this.recipeSelected = recipe;
        }
      );
  }

}
